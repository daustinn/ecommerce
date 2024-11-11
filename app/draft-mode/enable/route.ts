import { client } from '@/sanity/lib/client'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
const token = process.env.SANITY_API_READ_TOKEN

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  )
  if (!isValid) {
    return new Response('Invalid preview URL', { status: 400 })
  }

  ;(await draftMode()).enable()

  redirect(redirectTo)
}
