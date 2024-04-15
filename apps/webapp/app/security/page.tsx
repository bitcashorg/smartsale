import React from 'react'

export default function SecurityTips() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-10 py-24 mx-auto">
      <h1 className="text-3xl font-bold md:text-6xl">
        Security Recommendations for Bitlauncher Participants
      </h1>
      <p className="text-base md:text-lg">
        Participating in auctions on Bitlauncher, a fork of Gnosis, requires
        vigilance and awareness of various security threats. Here are some
        crucial tips to help keep your investments safe:
      </p>
      {securityTips.map((tip, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold md:text-4xl">
            {index + 1}. {tip.title}
          </h2>
          <p className="text-base md:text-lg">{tip.content}</p>
        </div>
      ))}
      <hr className="mt-24 border-gray-600/80" />
    </div>
  )
}

interface SecurityTip {
  title: string
  content: string
}

const securityTips: SecurityTip[] = [
  {
    title: 'Beware of Phishing Attacks',
    content:
      'Phishing is a common technique used by attackers to gain access to your personal information. Always verify the URL of the Bitlauncher and ensure it is the legitimate site before connecting your MetaMask wallet. Be cautious of emails or websites impersonating Bitlauncher.'
  },
  {
    title: 'MetaMask Security',
    content:
      'When using MetaMask, never share your seed phrase with anyone. Be cautious of any website or person asking for your MetaMask credentials. Always lock your MetaMask wallet when not in use.'
  },
  {
    title: 'Impersonation on Discord and Social Media',
    content:
      'Be wary of individuals on platforms like Discord and social media who claim to be representatives of Bitlauncher. Official staff will never ask for your private keys or wallet credentials.'
  },
  {
    title: 'Secure Your Digital Environment',
    content:
      'Ensure that your computer and internet connection are secure. Use antivirus software, enable firewalls, and update your software regularly to prevent malware attacks.'
  },
  {
    title: 'Double-Check Transaction Details',
    content:
      'Before confirming any transaction on MetaMask, double-check the recipients address, the amount, and the gas fees. Scammers often try to manipulate transaction details.'
  },
  {
    title: 'Stay Informed and Updated',
    content:
      'Follow only the official Bitlauncher channels for updates and information. Do not trust unverified sources.'
  },
  {
    title: 'Report Suspicious Activities',
    content:
      'If you encounter any suspicious activity or believe you are a victim of a scam, contact the official Bitlauncher support immediately.'
  }
] as const
