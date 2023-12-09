import * as React from 'react'

const PageAccordian = (props) => {
	return (
		<div className="container">
        <div className="accordion" id="accordionFS">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <a name="contact"></a>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Contact
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse open"
              data-bs-parent="#accordionFS"
            >
              <div className="accordion-body">
                Contact FutureSports at office@futuresports.com.au or by using
                the contact form on this Website.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <a name="privacy"></a>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Privacy Statement
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFS"
            >
              <div className="accordion-body">
                <p>
                  FutureSports is committed to providing quality services to you
                  and this policy outlines our ongoing obligations to you in
                  respect of how we manage your Personal Information.
                </p>
                <p>
                  We have adopted the Australian Privacy Principles (APPs)
                  contained in the Privacy Act 1988 (Cth) (the Privacy Act). The
                  NPPs govern the way in which we collect, use, disclose, store,
                  secure and dispose of your Personal Information.
                </p>
                <p>
                  A copy of the Australian Privacy Principles may be obtained
                  from the website of The Office of the Australian Information
                  Commissioner at https://www.oaic.gov.au/.
                </p>
                <p>What is Personal Information and why do we collect it?</p>
                <p>
                  Personal Information is information or an opinion that
                  identifies an individual. Examples of Personal Information we
                  collect includes names, addresses, email addresses, phone and
                  facsimile numbers.
                </p>
                <p>
                  This Personal Information is obtained in many ways including
                  [interviews, correspondence, by telephone and facsimile, by
                  email, via our website www.yourbusinessname.com.au, from your
                  website, from media and publications, from other publicly
                  available sources, from cookies- delete all that aren’t
                  applicable] and from third parties. We don’t guarantee website
                  links or policy of authorised third parties.
                </p>
                <p>
                  We collect your Personal Information for the primary purpose
                  of providing our services to you, providing information to our
                  clients and marketing. We may also use your Personal
                  Information for secondary purposes closely related to the
                  primary purpose, in circumstances where you would reasonably
                  expect such use or disclosure. You may unsubscribe from our
                  mailing/marketing lists at any time by contacting us in
                  writing.
                </p>
                <p>
                  When we collect Personal Information we will, where
                  appropriate and where possible, explain to you why we are
                  collecting the information and how we plan to use it.
                </p>
                <p>Sensitive Information</p>
                <p>
                  Sensitive information is defined in the Privacy Act to include
                  information or opinion about such things as an individual&quot;s
                  racial or ethnic origin, political opinions, membership of a
                  political association, religious or philosophical beliefs,
                  membership of a trade union or other professional body,
                  criminal record or health information.
                </p>
                <p>Sensitive information will be used by us only:</p>
                <ul>
                  <li>For the primary purpose for which it was obtained</li>
                  <li>
                    For a secondary purpose that is directly related to the
                    primary purpose
                  </li>
                  <li>
                    With your consent; or where required or authorised by law.
                  </li>
                </ul>
                <p>Third Parties</p>
                <p>
                  Where reasonable and practicable to do so, we will collect
                  your Personal Information only from you. However, in some
                  circumstances we may be provided with information by third
                  parties. In such a case we will take reasonable steps to
                  ensure that you are made aware of the information provided to
                  us by the third party.
                </p>
                <p>Disclosure of Personal Information</p>
                <p>
                  Your Personal Information may be disclosed in a number of
                  circumstances including the following:
                </p>
                <ul>
                  <li>
                    Third parties where you consent to the use or disclosure;
                    and
                  </li>
                  <li>Where required or authorised by law.</li>
                </ul>
                <p>Security of Personal Information</p>
                <p>
                  Your Personal Information is stored in a manner that
                  reasonably protects it from misuse and loss and from
                  unauthorized access, modification or disclosure.
                </p>
                <p>
                  When your Personal Information is no longer needed for the
                  purpose for which it was obtained, we will take reasonable
                  steps to destroy or permanently de-identify your Personal
                  Information. However, most of the Personal Information is or
                  will be stored in client files which will be kept by us for a
                  minimum of 7 years.
                </p>
                <p>Access to your Personal Information</p>
                <p>
                  You may access the Personal Information we hold about you and
                  to update and/or correct it, subject to certain exceptions. If
                  you wish to access your Personal Information, please contact
                  us in writing.
                </p>
                <p>
                  FutureSports will not charge any fee for your access request,
                  but may charge an administrative fee for providing a copy of
                  your Personal Information.
                </p>
                <p>
                  In order to protect your Personal Information we may require
                  identification from you before releasing the requested
                  information.
                </p>
                <p>Maintaining the Quality of your Personal Information</p>
                <p>
                  It is an important to us that your Personal Information is up
                  to date. We will take reasonable steps to make sure that your
                  Personal Information is accurate, complete and up-to-date. If
                  you find that the information we have is not up to date or is
                  inaccurate, please advise us as soon as practicable so we can
                  update our records and ensure we can continue to provide
                  quality services to you.
                </p>
                <p>Policy Updates</p>
                <p>
                  This Policy may change from time to time and is available on
                  our website.
                </p>
                <p>Privacy Policy Complaints and Enquiries</p>
                <p>
                  If you have any queries or complaints about our Privacy Policy
                  please contact us at office@futuresports.com.au.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <a name="terms"></a>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Terms and Conditions
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFS"
            >
              <div className="accordion-body">
                <p>
                  In these Terms of Use, any use of the words &quot;you&quot;,
                  &quot;yours&quot; or similar expressions shall mean any user
                  of this website and the app whatsoever. Terms such as
                  &quot;we&quot;, &quot;us, &quot;our&quot; or similar
                  expressions shall mean FutureSports.
                </p>
                <p>
                  This website, www.futuresports.com.au (the
                  &quot;Website&quot;), and the FutureSports mobile application
                  (the &quot;App&quot;) are operated by the FutureSports, a
                  company registered in Australia under company number 123456789
                  with registered office at Main Street, Sydney, NSW 2000. Our
                  ACN is 012 345 678 901.
                </p>
                <p>
                  Please read this page carefully as it sets out the terms that
                  apply to your use of the Website and the App, and any part of
                  their content and all materials appearing on them. By using
                  the Website you confirm that you accept these Terms of Use and
                  you agree to comply with them. If you do not agree to these
                  Terms of Use, please refrain from using the Website and App.
                </p>
                <p>
                  These Terms of Use are additional to, and should be read in
                  conjunction with, our Privacy Policy.
                </p>
                <p>
                  We may change these terms at any time by amending this page.
                  Please check this page regularly to take notice of any such
                  changes as you will be deemed to accept them through your
                  continued use of the Website and the App.
                </p>
                <p>
                  We aim to update the Website regularly, and may change the
                  content at any time. If the need arises, we may suspend access
                  to the Website, or close it indefinitely. We will not be
                  liable if for any reason the Website is unavailable at any
                  time or for any period. Any of the material on the Website may
                  be out of date at any given time, and we are under no
                  obligation to update such material.
                </p>
                <p>
                  The Website is protected by copyright, database rights and
                  other intellectual property and related rights
                  (&quot;Rights&quot;) which are owned by us and our suppliers.
                  All such Rights are reserved. Except where otherwise indicated
                  on the Website:
                </p>
                <blockquote>
                  You may download and print material from the Website as is
                  reasonable for your own private and personal use; You may also
                  forward such material from the Website to other people for
                  their private and personal use provided you credit us as its
                  source and add the Website address: www.futuresports.com.au.
                  You must draw their attention to these terms which also apply
                  to them; and You may provide links to the Website provided
                  they go to the home page only and provided you do so in a way
                  that is fair, legal and does not damage our reputation or take
                  advantage of it. You must not establish a link in such a way
                  as to suggest any form of association, approval or endorsement
                  on the part of us where none exists.
                </blockquote>
                <p>
                  The Website must not be used in any other way, including for
                  commercial purposes, and you may not otherwise reproduce,
                  re-utilise or redistribute it (including, by way of example,
                  creating a database (electronic or otherwise) that includes
                  material downloaded or otherwise obtained from the Website),
                  or frame or deep-link to it (or to any of its content) on any
                  other website, without our prior written approval. If you
                  print off, copy or download any part of the Website in breach
                  of these terms, your right to use the Website will cease
                  immediately and you must return or destroy any copies of the
                  materials you have made at our request.
                </p>
                <p>
                  The trade marks, logos and brand names shown on the Website
                  are owned by us or our suppliers, partners or member Clubs. No
                  rights are granted to use any of them without the prior
                  written permission of the owner.
                </p>
                <p>
                  Reasonable skill and care has been used in producing the
                  Website but it is only designed for general information
                  purposes. No guarantee is given by us or our suppliers that
                  the Website (including any statistics contained on the
                  Website) is accurate, complete or up-to-date. We therefore
                  disclaim all liability and responsibility arising from any
                  reliance placed on the content of the Website by you, or by
                  anyone who may be informed of the Website&aops;s contents.
                </p>
                <p>
                  The Website contains links to other websites and services
                  operated by parties independent to the us. We take reasonable
                  precautions in selecting these however we do not endorse or
                  take responsibility for the content or availability of these
                  websites and cannot accept any liability for any material
                  contained within them or for your use of them or any use of
                  your personal data collected by their operators. If you decide
                  to access linked websites you do so at your own risk and we
                  encourage you to read the privacy statements applicable to
                  each specific website.
                </p>
                <p>
                  We and our suppliers take reasonable precautions to prevent
                  computer viruses, trojan horses, worms, time bombs,
                  cancelbots, corrupted files, or any other items that may
                  damage the operation of computers or property or otherwise
                  engage in computer misuse (&quot;Malicious Programmes&quot;)
                  on the Website but cannot accept any liability for them. You
                  are advised to take precautions against such Malicious
                  Programmes, including the use of suitable protective software.
                </p>
                <p>
                  You must not misuse the Website by knowingly introducing
                  Malicious Programmes. You must not attempt to gain
                  unauthorised access to the Website, the server on which the
                  Website is stored or any server, computer or database
                  connected to the Website. You must not attack the Website via
                  a denial-of-service attack or a distributed denial-of-service
                  attack. By breaching this provision, you would commit a
                  criminal offence under Australian law. We will report any such
                  breach to the relevant law enforcement authorities and will
                  co-operate with those authorities by disclosing your identity
                  to them. In the event of such a breach, your right to use the
                  Website will cease immediately.
                </p>
                <p>
                  Except in the case of death or personal injury caused by our
                  negligence or any wilful act, to the fullest extent permitted
                  by law we exclude all liability to you in respect of your
                  Account and your use of the Website and App.
                </p>
                <p>
                  These Terms of Use are governed by and interpreted in
                  accordance with the laws of Australia. Any disputes arising
                  under or in connection with these terms shall be subject to
                  the non-exclusive jurisdiction of the Australian courts.
                </p>
                <p>
                  If you have any comments or questions about the Website or the
                  App please contact us at info@futuresports.com.au.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <a name="copyright"></a>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Copyright
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFS"
            >
              <div className="accordion-body">
                &copy;2023 FutureSports. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
	)
}

export default PageAccordian
