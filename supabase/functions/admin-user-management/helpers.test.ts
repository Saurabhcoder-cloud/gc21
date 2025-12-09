import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildCompanyInsert,
  buildPassword,
  buildProfileInsert,
  normalizeBuyerInput,
  normalizeSupplierInput,
} from './helpers.js';

describe('normalizeBuyerInput', () => {
  it('throws when required fields are missing', () => {
    assert.throws(() => normalizeBuyerInput({ email: 'missing@field.com' }));
  });

  it('normalizes buyer payload', () => {
    const result = normalizeBuyerInput({
      name: ' John Doe ',
      email: 'TEST@EXAMPLE.COM',
      phone: '+123',
      company: ' ACME ',
      country: ' US ',
      city: 'NY',
      category: 'Diesel',
      requirement: 'Need stock',
      password: 'Secret',
    });

    assert.equal(result.email, 'test@example.com');
    assert.equal(result.name, 'John Doe');
    assert.equal(result.company, 'ACME');
    assert.equal(result.password, 'Secret');
  });
});

describe('normalizeSupplierInput', () => {
  it('inherits buyer validation and flags paid plan', () => {
    const result = normalizeSupplierInput({
      name: 'Supplier',
      email: 'supplier@example.com',
      phone: '+123',
      company: 'Supply Co',
      country: 'AE',
      city: 'Dubai',
      category: 'Fuel',
      requirement: 'Monthly',
      has_paid_plan: true,
    });

    assert.equal(result.has_paid_plan, true);
    assert.equal(result.name, 'Supplier');
  });
});

describe('buildProfileInsert and buildCompanyInsert', () => {
  it('creates buyer profile and company payloads', () => {
    const buyer = normalizeBuyerInput({
      name: 'Buyer One',
      email: 'buyer@example.com',
      phone: '+1000',
      company: 'Buyer LLC',
      country: 'US',
      city: 'NY',
      category: 'EN590',
      requirement: 'Monthly',
    });

    const profile = buildProfileInsert('buyer-1', buyer, 'buyer');
    const company = buildCompanyInsert('buyer-1', buyer, 'buyer');

    assert.equal(profile.user_type, 'buyer');
    assert.equal(profile.has_paid_plan, null);
    assert.equal(company.business_type, 'buyer');
  });

  it('creates supplier profile with paid flag', () => {
    const supplier = normalizeSupplierInput({
      name: 'Supplier',
      email: 'supplier@example.com',
      phone: '+123',
      company: 'Supply Co',
      country: 'AE',
      city: 'Dubai',
      category: 'Fuel',
      requirement: 'Monthly',
      has_paid_plan: true,
    });

    const profile = buildProfileInsert('supplier-1', supplier, 'supplier');
    assert.equal(profile.has_paid_plan, true);
  });
});

describe('buildPassword', () => {
  it('generates non-empty passwords', () => {
    assert.ok(buildPassword('Buyer').length > 10);
  });
});
