import { z } from 'zod'

const friendSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be greater than 3 characters long'
    })
    .max(200, {
      message: 'Name must be less than 200 characters long'
    }),
  birthdate: z
    .coerce.date().min(new Date('1900-01-01'), { message: 'Date invalid' }).max(new Date(), { message: 'Date invalid' })
})

export default friendSchema
