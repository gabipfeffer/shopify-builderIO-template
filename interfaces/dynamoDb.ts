export interface ISaveNewSubscriptionParams {
  boldSubscriptionId: string
  boldSubscriptionEmail: string
  thinkificUserId: string
  thinkificCourseId: string
  thinkificEnrollmentId: string
}

export interface ISaveNewAdminParams {
  email: string
}

export interface ISaveNewAdminResult {
  admin: { id: any } | null
}

export interface ISaveNewLicenseParams {
  shopifyCustomerId: string
  shopifyVariantId: string
  adminId: string
  studentCount: number
}

export interface ISaveNewLicenseResult {
  license: { id: string } | null
}

export interface ISaveNewSessionParams {
  adminId: string
}

export interface ISaveNewSessionResult {
  session: { token: string } | null
}

export interface ISaveNewEnrollmentParams {
  shopifyCustomerId: string
  shopifyVariantId: string
  thinkificEnrollmentId: string
}

export interface ISaveNewEnrollmentResult {
  enrollment: { id: string }
}

export interface IGetAdminByEmailParams {
  email: string
}

export interface IGetAdminByEmailResult {
  admin: { id: any } | null
}
