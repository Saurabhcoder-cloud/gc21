import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeBuyerForViewer, supplierHasActivePaidPlan } from './privacy.js';

describe('supplierHasActivePaidPlan', () => {
  it('returns true when has_paid_plan is true', () => {
    assert.equal(supplierHasActivePaidPlan({ has_paid_plan: true }), true);
  });

  it('returns true when subscription_status is active', () => {
    assert.equal(supplierHasActivePaidPlan({ subscription_status: 'active' }), true);
  });

  it('returns false when no indicators are present', () => {
    assert.equal(supplierHasActivePaidPlan({}), false);
  });
});

describe('sanitizeBuyerForViewer', () => {
  const buyer = { id: 'buyer-1', user_type: 'buyer', phone: '+1000000', email: 'buyer@example.com' };

  it('allows admins to see full contact', () => {
    const result = sanitizeBuyerForViewer(buyer, { role: 'admin' });
    assert.equal(result.phone, buyer.phone);
    assert.equal(result.email, buyer.email);
    assert.equal(result.phone_protected, false);
  });

  it('masks data for unpaid suppliers', () => {
    const result = sanitizeBuyerForViewer(buyer, { role: 'supplier', hasPaidPlan: false });
    assert.ok(String(result.phone).includes('*'));
    assert.ok(String(result.email).includes('hidden'));
    assert.equal(result.phone_protected, true);
  });

  it('shows full data for paid suppliers', () => {
    const result = sanitizeBuyerForViewer(buyer, { role: 'supplier', hasPaidPlan: true });
    assert.equal(result.phone, buyer.phone);
    assert.equal(result.email, buyer.email);
    assert.equal(result.phone_protected, false);
  });

  it('shows full data for the buyer themselves', () => {
    const result = sanitizeBuyerForViewer(buyer, { userId: 'buyer-1' });
    assert.equal(result.email, buyer.email);
    assert.equal(result.phone_protected, false);
  });
});
