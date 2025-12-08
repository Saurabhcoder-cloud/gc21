export interface ProfileRecord {
  id?: string;
  user_type?: string;
  has_paid_plan?: boolean | null;
  subscription_status?: string | null;
  email?: string | null;
  phone?: string | null;
  [key: string]: any;
}

export interface ViewerContext {
  role?: string | null;
  userId?: string;
  hasPaidPlan?: boolean;
}

const MASKED_PHONE = '**********';
const MASKED_EMAIL = 'hidden until you upgrade';

export function supplierHasActivePaidPlan(profile?: ProfileRecord | null): boolean {
  if (!profile) return false;
  if (profile.has_paid_plan === true) return true;
  if (typeof profile.subscription_status === 'string') {
    return profile.subscription_status.toLowerCase() === 'active';
  }
  return false;
}

export function sanitizeBuyerForViewer(buyer: ProfileRecord, viewer: ViewerContext) {
  const baseBuyer = {
    ...buyer,
    phone_protected: false,
    email_protected: false,
  };

  if (buyer.user_type !== 'buyer') {
    return baseBuyer;
  }

  if (viewer.role === 'admin' || buyer.id === viewer.userId) {
    return baseBuyer;
  }

  if (viewer.role === 'supplier') {
    if (supplierHasActivePaidPlan({ has_paid_plan: viewer.hasPaidPlan })) {
      return baseBuyer;
    }

    return {
      ...buyer,
      phone: MASKED_PHONE,
      email: MASKED_EMAIL,
      phone_protected: true,
      email_protected: true,
    };
  }

  return {
    ...buyer,
    phone: MASKED_PHONE,
    email: MASKED_EMAIL,
    phone_protected: true,
    email_protected: true,
  };
}
