export interface IFindUserByEmailParams {
  email: string
}

export interface ICreateUserParams extends IFindUserByEmailParams {
  firstName: string
  lastName: string
}

export interface ICreateEnrollmentParams {
  userId?: string
  courseId?: string
}

export interface IThinkificUser {
  id: string
  created_at?: string
  first_name?: string
  last_name?: string
  full_name?: string
  company?: string
  email?: string
  roles?: Array<string>
  avatar_url?: string
  bio?: string
  headline?: string
  affiliate_code?: string
  external_source?: string
  affiliate_commission?: number
  affiliate_commission_type?: string
  affiliate_payout_email?: string
  administered_course_ids?: Array<Array<number>>
  custom_profile_fields?: Array<{
    id: number
    value: string
    label: string
    custom_profile_field_definition_id: number
  }>
}

export interface IThinkificCourse {
  id: string
  name?: string
  slug?: string
  subtitle?: string
  product_id?: number
  description?: string
  course_card_text?: string
  intro_video_youtube?: string
  contact_information?: string
  keywords?: string
  duration?: string
  banner_image_url?: string
  course_card_image_url?: string
  intro_video_wistia_identifier?: string
  administrator_user_ids?: Array<number>
  chapter_ids?: Array<number>
  reviews_enabled?: false
  user_id?: number
  instructor_id?: number
}

export interface IThinkificEnrollment {
  id: string
  user_email?: string
  user_name?: string
  user_id?: number
  course_name?: string
  course_id?: number
  percentage_completed?: number
  expired?: false
  is_free_trial?: false
  completed?: true
  started_at?: string
  activated_at?: string
  completed_at?: string
  updated_at?: string
  expiry_date?: string
}

export interface IThinkificUsersClient {
  findUserByEmail: (params: IFindUserByEmailParams) => Promise<IThinkificUser | null>
  createUser: (params: ICreateUserParams) => Promise<IThinkificUser>
}

export interface IThinkificCoursesClient {
  getCourseById: (params: { id: string }) => Promise<IThinkificCourse | null>
  createEnrollment: (params: ICreateEnrollmentParams) => Promise<IThinkificEnrollment>
}
