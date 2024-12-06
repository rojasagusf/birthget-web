import { z } from 'zod'

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be greater than 3 characters long'
    })
    .max(200, {
      message: 'Name must be less than 200 characters long'
    }),
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address'
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long'
    })
    .max(14, {
      message: 'Password must be at least 14 characters long'
    }),
  confirmPassword: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long'
    })
    .max(14, {
      message: 'Password must be at least 14 characters long'
    })
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password must match',
  path: ['confirmPassword']
})

export const userLoginSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address'
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long'
    })
})

export const userPatchSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be greater than 3 characters long'
    })
    .max(200, {
      message: 'Name must be less than 200 characters long'
    }),
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address'
    }),
  cellphone: z
    .string()
    .min(10)
    .max(10)
})
