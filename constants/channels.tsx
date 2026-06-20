// Supported social media channel definitions
import { NewTwitterIcon, LinkedinIcon } from '@hugeicons/core-free-icons'

export enum ChannelTypeEnum {
  TWITTER = "TWITTER",
  LINKEDIN = "LINKEDIN",
}

export const CHANNEL_TYPE_ICONS: Record<ChannelTypeEnum, any> = {
  [ChannelTypeEnum.TWITTER]: NewTwitterIcon,
  [ChannelTypeEnum.LINKEDIN]: LinkedinIcon,
}

export const CHANNEL_TYPE_URLS: Record<ChannelTypeEnum, string> = {
  [ChannelTypeEnum.TWITTER]: "https://x.com",
  [ChannelTypeEnum.LINKEDIN]: "https://linkedin.com",
}


export function getChannelUrl(type: ChannelTypeEnum | undefined) {
  if (!type) return ""
  return CHANNEL_TYPE_URLS[type]
}


export function getChannelIcon(type: ChannelTypeEnum | undefined) {
  if (!type) return null
  return CHANNEL_TYPE_ICONS[type]
}