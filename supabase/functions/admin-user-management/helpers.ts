export interface BuyerInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  category: string;
  requirement: string;
  password?: string;
}

export interface SupplierInput extends BuyerInput {
  has_paid_plan?: boolean;
}

function requireFields(payload: Record<string, any>, fields: string[], entity: string) {
  const missing = fields.filter((field) => {
    const value = payload[field];
    return value === undefined || value === null || String(value).trim() === '';
  });

  if (missing.length > 0) {
    throw new Error(`${entity} is missing required fields: ${missing.join(', ')}`);
  }
}

export function normalizeBuyerInput(payload: any): BuyerInput {
  requireFields(payload, ['name', 'email', 'phone', 'company', 'country', 'city', 'category', 'requirement'], 'Buyer');

  return {
    name: String(payload.name).trim(),
    email: String(payload.email).trim().toLowerCase(),
    phone: String(payload.phone).trim(),
    company: String(payload.company).trim(),
    country: String(payload.country).trim(),
    city: String(payload.city).trim(),
    category: String(payload.category).trim(),
    requirement: String(payload.requirement).trim(),
    password: payload.password ? String(payload.password).trim() : undefined,
  };
}

export function normalizeSupplierInput(payload: any): SupplierInput {
  const supplier = normalizeBuyerInput(payload) as SupplierInput;
  supplier.has_paid_plan = payload.has_paid_plan === true;
  return supplier;
}

export function buildProfileInsert(userId: string, input: BuyerInput | SupplierInput, userType: 'buyer' | 'supplier') {
  return {
    id: userId,
    email: input.email,
    name: input.name,
    full_name: input.name,
    phone: input.phone,
    user_type: userType,
    role: userType,
    country: input.country,
    city: input.city,
    category: input.category,
    status: 'active',
    has_paid_plan: userType === 'supplier' ? (input as SupplierInput).has_paid_plan === true : null,
  };
}

export function buildCompanyInsert(userId: string, input: BuyerInput | SupplierInput, businessType: 'buyer' | 'supplier') {
  return {
    user_id: userId,
    company_name: input.company,
    contact_person_name: input.name,
    business_type: businessType,
    preferred_categories: input.category,
    country: input.country,
    city: input.city,
    requirement: input.requirement,
  };
}

export function buildPassword(prefix: 'Buyer' | 'Supplier') {
  return `${prefix}${Math.random().toString(36).slice(-8)}!${Date.now()}`;
}
