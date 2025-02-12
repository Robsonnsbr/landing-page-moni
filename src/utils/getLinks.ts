/* cpell:desable */
'use server';
type LinkType =
  | 'whatsappFirst'
  | 'whatsappSecondary'
  | 'instagram'
  | 'linkedin';

const links: Record<LinkType, string> = {
  whatsappSecondary: 'https://api.whatsapp.com/send/?phone=554199483760',
  whatsappFirst: 'https://api.whatsapp.com/send/?phone=554198083760',
  instagram: `https://www.instagram.com/monimoccelin?igsh=MWFsbXN1cjh6aWsydw==`,
  linkedin: `https://www.linkedin.com/in/monichara-moccelin-7675b4194/`
};

export async function getLink(type: LinkType): Promise<string> {
  return Promise.resolve(links[type] || '');
}
