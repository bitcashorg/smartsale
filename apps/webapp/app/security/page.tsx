const securityTipsClassNames: Record<string, string> = {
  contentClassName: "mt-10",
  h1: 'text-3xl md:text-6xl font-bold',
  h2: 'text-2xl md:text-4xl font-bold',
  p: 'text-base md:text-lg',
  container: 'flex flex-col gap-10 py-24 max-w-screen-lg',
}


export default function SecurityTips() {
  return (
    <div className={securityTipsClassNames.container}>
      <h1 className={securityTipsClassNames.h1}>Security Recommendations for Bitcash Launchpad Participants</h1>
      <p className={securityTipsClassNames.p}>
        Participating in auctions on Bitcash Launchpad, a fork of Gnosis,
        requires vigilance and awareness of various security threats. Here are
        some crucial tips to help keep your investments safe:
      </p>

      <h2 className={securityTipsClassNames.h2}>1. Beware of Phishing Attacks</h2>
      <p className={securityTipsClassNames.p}>
        Phishing is a common technique used by attackers to gain access to your
        personal information. Always verify the URL of the Bitcash Launchpad and
        ensure it is the legitimate site before connecting your MetaMask wallet.
        Be cautious of emails or websites impersonating Bitcash Launchpad.
      </p>

      <h2 className={securityTipsClassNames.h2}>2. MetaMask Security</h2>
      <p className={securityTipsClassNames.p}>
        When using MetaMask, never share your seed phrase with anyone. Be
        cautious of any website or person asking for your MetaMask credentials.
        Always lock your MetaMask wallet when not in use.
      </p>

      <h2 className={securityTipsClassNames.h2}>3. Impersonation on Discord and Social Media</h2>
      <p className={securityTipsClassNames.p}>
        Be wary of individuals on platforms like Discord and social media who
        claim to be representatives of Bitcash Launchpad. Official staff will
        never ask for your private keys or wallet credentials.
      </p>

      <h2 className={securityTipsClassNames.h2}>4. Secure Your Digital Environment</h2>
      <p className={securityTipsClassNames.p}>
        Ensure that your computer and internet connection are secure. Use
        antivirus software, enable firewalls, and update your software regularly
        to prevent malware attacks.
      </p>

      <h2 className={securityTipsClassNames.h2}>5. Double-Check Transaction Details</h2>
      <p className={securityTipsClassNames.p}>
        Before confirming any transaction on MetaMask, double-check the
        recipients address, the amount, and the gas fees. Scammers often try to
        manipulate transaction details.
      </p>

      <h2 className={securityTipsClassNames.h2}>6. Stay Informed and Updated</h2>
      <p className={securityTipsClassNames.p}>
        Follow only the official Bitcash Launchpad channels for updates and
        information. Do not trust unverified sources.
      </p>

      <h2 className={securityTipsClassNames.h2}>7. Report Suspicious Activities</h2>
      <p className={securityTipsClassNames.p}>
        If you encounter any suspicious activity or believe you are a victim of
        a scam, contact the official Bitcash Launchpad support immediately.
      </p>

      <p className={securityTipsClassNames.p}>Stay vigilant and always prioritize your digital security!</p>
    </div>
  )
}
