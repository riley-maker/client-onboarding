'use client'

import { useState } from 'react'

// Formspree form ID: submissions are emailed and stored in the Formspree dashboard
const FORMSPREE_ID = 'xjknljjv'

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Contact Info
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    approverName: '',
    approverEmail: '',
    
    // Communication
    preferredChannel: '',
    slackInviteEmails: '',
    discordServer: '',
    whatsappNumber: '',
    otherContact: '',
    
    // Access
    emailPlatform: '',
    emailAccessStatus: '',
    storePlatform: '',
    storeUrl: '',
    collaboratorCode: '',
    replyToEmail: '',
    
    // Brand Identity
    companyNames: '',
    brandGuideType: '',
    brandGuideLink: '',
    visualAssetsType: '',
    visualAssetsLink: '',
    visualAssetsAccess: '',
    uniqueSellingPoints: '',
    shippingTimeline: '',
    founderEmails: '',
    founderName: '',
    
    // Discount Strategy
    newCustomerDiscount: '',
    followUpDiscount: '',
    followUpOpen: '',
    abandonedCartDiscount: '',
    
    // Partnership Goals
    successLooksLike: '',
    happyResults: '',
    goLiveDate: '',
    goLiveBlockers: '',
    keyDates: '',
    noSendDates: '',
    additionalNotes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const nextStep = (e) => {
    const form = e && e.currentTarget ? e.currentTarget.form : null
    if (form && !form.reportValidity()) return
    setCurrentStep(prev => Math.min(prev + 1, 5))
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
        body: JSON.stringify({
          ...formData,
          _subject: `New Onboarding: ${formData.companyName}`,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('There was an error submitting the form. Please try again or contact riley@thedeadletteragency.com directly.')
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again or contact riley@thedeadletteragency.com directly.')
    }

    setIsSubmitting(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #e8e4df',
    borderRadius: '8px',
    background: '#fdfcfb',
    transition: 'all 0.2s ease',
    outline: 'none',
    fontFamily: 'var(--font-dm-sans), -apple-system, sans-serif',
    boxSizing: 'border-box'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#111111',
    letterSpacing: '0.02em'
  }

  const hintStyle = {
    fontSize: '13px',
    color: '#8a8580',
    marginBottom: '10px',
    marginTop: '-4px',
    lineHeight: '1.5'
  }

  const fieldGroup = {
    marginBottom: '24px'
  }

  const radioOptionStyle = (isSelected) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 16px',
    background: isSelected ? '#faf8f5' : '#fdfcfb',
    border: `2px solid ${isSelected ? '#111111' : '#e8e4df'}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '14px',
    fontWeight: isSelected ? '600' : '400'
  })

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#f4f1ea',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-dm-sans), -apple-system, sans-serif',
        padding: '40px 20px'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          padding: '60px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 25px 80px rgba(17, 17, 17, 0.08)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#111111',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            fontSize: '36px',
            color: '#fff'
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '32px', color: '#111111', marginBottom: '16px', fontWeight: '700' }}>
            You're All Set!
          </h2>
          <p style={{ fontSize: '17px', color: '#6b6560', lineHeight: '1.7' }}>
            Thanks for completing the onboarding form. One last step: book your onboarding call so we can walk through the plan together.
          </p>
          <a
            href="https://calendly.com/riley-thedeadletteragency/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              padding: '16px 36px',
              background: '#111111',
              color: '#f4f1ea',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              letterSpacing: '0.02em'
            }}
          >
            Book Your Onboarding Call →
          </a>
          <div style={{
            marginTop: '32px',
            padding: '20px',
            background: '#faf8f5',
            borderRadius: '12px',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#111111', marginBottom: '8px' }}>
              ⏳ What happens next:
            </p>
            <ul style={{ fontSize: '14px', color: '#6b6560', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>I'll review your answers within 24-48 hours</li>
              <li>I'll confirm account access and request anything missing</li>
              <li>You'll get an invite to our shared channel</li>
              <li>We'll walk through the plan on the onboarding call</li>
            </ul>
          </div>
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#111111',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '14px'
          }}>
            <p style={{ margin: 0, opacity: 0.8 }}>Questions? Reach me directly:</p>
            <p style={{ margin: '8px 0 0', fontWeight: '600' }}>
              riley@thedeadletteragency.com · (661) 210-5536
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f1ea',
      fontFamily: 'var(--font-dm-sans), -apple-system, sans-serif',
      padding: '40px 20px'
    }}>
      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: #111111 !important;
          box-shadow: 0 0 0 4px rgba(17, 17, 17, 0.1) !important;
        }
        input::placeholder, textarea::placeholder {
          color: #a9a5a0;
        }
      `}</style>

      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#111111',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#f4f1ea' }}>◆</span>
            Client Onboarding
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display), Impact, sans-serif',
            fontSize: '46px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: '#111111',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Let's Get Started
          </h1>
          <p style={{ fontSize: '17px', color: '#6b6560', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete this form so I can hit the ground running on your email marketing.
          </p>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            {['Contact', 'Access', 'Brand', 'Discounts', 'Goals & Timing'].map((label, i) => (
              <div key={i} style={{
                fontSize: '12px',
                fontWeight: '600',
                color: currentStep >= i + 1 ? '#111111' : '#b5b0ab',
                letterSpacing: '0.03em',
                transition: 'color 0.3s ease'
              }}>
                {label}
              </div>
            ))}
          </div>
          <div style={{
            height: '6px',
            background: '#e8e4df',
            borderRadius: '100px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${(currentStep / 5) * 100}%`,
              background: '#111111',
              borderRadius: '100px',
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }} />
          </div>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 25px 80px rgba(17, 17, 17, 0.08)',
            marginBottom: '24px'
          }}>
            
            {/* Step 1: Contact & Communication */}
            {currentStep === 1 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
                  Contact & Communication
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  How can I reach you?
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Brand Co."
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@yourbrand.com"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '6px' }}>
                    Who approves emails before they go out? *
                  </h3>
                  <p style={{ ...hintStyle, marginTop: 0, marginBottom: '16px' }}>
                    One person with the final say keeps things moving. I'll send work to them for review.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ marginBottom: 0 }}>
                      <label style={labelStyle}>Approver Name *</label>
                      <input
                        type="text"
                        name="approverName"
                        value={formData.approverName}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: 0 }}>
                      <label style={labelStyle}>Approver Email *</label>
                      <input
                        type="email"
                        name="approverEmail"
                        value={formData.approverEmail}
                        onChange={handleChange}
                        placeholder="jane@yourbrand.com"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '16px' }}>
                    💬 Preferred Communication Channel *
                  </h3>
                  <p style={{ ...hintStyle, marginBottom: '16px' }}>
                    How would you like us to stay in touch? Slack is my default: I'll set up a shared channel and invite your team.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                    {['Slack', 'Discord', 'WhatsApp', 'Text', 'Email', 'Other'].map((channel) => (
                      <label key={channel} style={radioOptionStyle(formData.preferredChannel === channel.toLowerCase())}>
                        <input
                          type="radio"
                          name="preferredChannel"
                          value={channel.toLowerCase()}
                          checked={formData.preferredChannel === channel.toLowerCase()}
                          onChange={handleChange}
                          style={{ accentColor: '#111111' }}
                          required
                        />
                        {channel}
                      </label>
                    ))}
                  </div>

                  {formData.preferredChannel === 'slack' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Who should I invite to our Slack channel?</label>
                      <p style={hintStyle}>I'll create a shared channel for us. List the email address of everyone who should be in it.</p>
                      <input
                        type="text"
                        name="slackInviteEmails"
                        value={formData.slackInviteEmails}
                        onChange={handleChange}
                        placeholder="jane@yourbrand.com, sam@yourbrand.com"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'discord' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Discord Server</label>
                      <p style={hintStyle}>Please share your Discord server invite link.</p>
                      <input
                        type="text"
                        name="discordServer"
                        value={formData.discordServer}
                        onChange={handleChange}
                        placeholder="discord.gg/invite or your username"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'whatsapp' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>WhatsApp Number</label>
                      <p style={hintStyle}>What number should I message you on?</p>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'text' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Text/SMS Number</label>
                      <p style={hintStyle}>Confirm the best number to text you at:</p>
                      <input
                        type="tel"
                        name="otherContact"
                        value={formData.otherContact}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'email' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Best Email for Communication</label>
                      <p style={hintStyle}>Confirm the email you'd like me to use for day-to-day communication:</p>
                      <input
                        type="email"
                        name="otherContact"
                        value={formData.otherContact}
                        onChange={handleChange}
                        placeholder="jane@yourbrand.com"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'other' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Preferred Communication Method</label>
                      <p style={hintStyle}>Let me know how you'd like to communicate and how I can reach you:</p>
                      <textarea
                        name="otherContact"
                        value={formData.otherContact}
                        onChange={handleChange}
                        placeholder="e.g., Telegram @username, Voxer, Google Chat, etc."
                        rows={2}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    </div>
                  )}
                </div>

                <div style={{
                  background: '#111111',
                  borderRadius: '12px',
                  padding: '20px',
                  color: '#fff'
                }}>
                  <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>
                    <strong style={{ color: '#f4f1ea' }}>My contact info:</strong><br/>
                    📧 riley@thedeadletteragency.com<br/>
                    📱 (661) 210-5536
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Access */}
            {currentStep === 2 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
                  Account Access
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  I need top-level access to your email platform and your store to get started.
                </p>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '20px' }}>📧</span> Email Platform Access
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '16px', lineHeight: '1.6' }}>
                    Please add <strong>riley@thedeadletteragency.com</strong> to your email platform (Klaviyo, or whatever you send with) at the highest access level it offers.<br/>
                    In Klaviyo: Settings → Account → Users → Add User, with the <strong>"Manager"</strong> role.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ marginBottom: 0 }}>
                      <label style={labelStyle}>Which email platform? *</label>
                      <input
                        type="text"
                        name="emailPlatform"
                        value={formData.emailPlatform}
                        onChange={handleChange}
                        placeholder="Klaviyo"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: 0 }}>
                      <label style={labelStyle}>Access Status *</label>
                      <select
                        name="emailAccessStatus"
                        value={formData.emailAccessStatus}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select status...</option>
                        <option value="added-full-access">✓ Added with full access</option>
                        <option value="need-upgrade">Already added, but access needs upgrading</option>
                        <option value="will-add">Will add after submitting this form</option>
                        <option value="need-help">Need help with this</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '20px' }}>🛒</span> Store Access
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '16px', lineHeight: '1.6' }}>
                    I need top-level access to your store (Shopify, or whatever your store runs on).<br/>
                    On Shopify: share your <strong>4-digit collaborator code</strong> below and I'll send the request. Find it under Settings → Users and permissions → Collaborators.<br/>
                    On anything else: please add <strong>riley@thedeadletteragency.com</strong> as an admin user.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Which store platform? *</label>
                      <input
                        type="text"
                        name="storePlatform"
                        value={formData.storePlatform}
                        onChange={handleChange}
                        placeholder="Shopify"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Store URL *</label>
                      <input
                        type="text"
                        name="storeUrl"
                        value={formData.storeUrl}
                        onChange={handleChange}
                        placeholder="yourstore.myshopify.com"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 0, maxWidth: '260px' }}>
                    <label style={labelStyle}>Collaborator Code (Shopify only)</label>
                    <input
                      type="text"
                      name="collaboratorCode"
                      value={formData.collaboratorCode}
                      onChange={handleChange}
                      placeholder="1234"
                      maxLength={4}
                      style={{ ...inputStyle, letterSpacing: '0.3em', textAlign: 'center', fontWeight: '600' }}
                    />
                  </div>
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Reply-To Email Address *</label>
                  <p style={hintStyle}>
                    What email should customer replies go to? (e.g., support@, hello@, info@)
                  </p>
                  <input
                    type="email"
                    name="replyToEmail"
                    value={formData.replyToEmail}
                    onChange={handleChange}
                    placeholder="support@yourbrand.com"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Brand */}
            {currentStep === 3 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
                  Brand Identity
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  Help me understand and represent your brand accurately.
                </p>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Company Name Variations *</label>
                  <p style={hintStyle}>
                    How should we refer to your company? Include all names, abbreviations, and shortened versions we can use.
                  </p>
                  <textarea
                    name="companyNames"
                    value={formData.companyNames}
                    onChange={handleChange}
                    placeholder="e.g., Glow Skincare, Glow, GS, 'the Glow fam'"
                    rows={2}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    required
                  />
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>What Sets You Apart? *</label>
                  <p style={hintStyle}>
                    What makes your brand different from competitors? (e.g., pricing, transparency, customer support, shipping times, unique selling propositions)
                  </p>
                  <textarea
                    name="uniqueSellingPoints"
                    value={formData.uniqueSellingPoints}
                    onChange={handleChange}
                    placeholder="e.g., We're the only brand that offers free 2-day shipping, 100% organic ingredients, and a 365-day money-back guarantee..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    required
                  />
                </div>

                {/* Brand Guide */}
                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <label style={labelStyle}>Brand Guide / Style Guide</label>
                  <p style={hintStyle}>
                    Share your brand guidelines if you have them. Choose how you'd like to share:
                  </p>
                  
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {['Link to folder', 'Give me access', "Don't have one"].map((option) => (
                      <label key={option} style={{
                        ...radioOptionStyle(formData.brandGuideType === option.toLowerCase().replace(/[^a-z]/g, '-')),
                        flex: '1 1 auto',
                        minWidth: '120px',
                        justifyContent: 'center',
                        fontSize: '13px'
                      }}>
                        <input
                          type="radio"
                          name="brandGuideType"
                          value={option.toLowerCase().replace(/[^a-z]/g, '-')}
                          checked={formData.brandGuideType === option.toLowerCase().replace(/[^a-z]/g, '-')}
                          onChange={handleChange}
                          style={{ accentColor: '#111111' }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {formData.brandGuideType === 'link-to-folder' && (
                    <input
                      type="url"
                      name="brandGuideLink"
                      value={formData.brandGuideLink}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/... or Dropbox link"
                      style={inputStyle}
                    />
                  )}

                  {formData.brandGuideType === 'give-me-access' && (
                    <div>
                      <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '8px' }}>
                        Please share access to your brand guide folder with: <strong>riley@thedeadletteragency.com</strong>
                      </p>
                      <input
                        type="text"
                        name="brandGuideLink"
                        value={formData.brandGuideLink}
                        onChange={handleChange}
                        placeholder="Where should I look? (e.g., Google Drive, Notion, etc.)"
                        style={inputStyle}
                      />
                    </div>
                  )}
                </div>

                {/* Visual Assets */}
                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <label style={labelStyle}>Visual Assets *</label>
                  <p style={hintStyle}>
                    I need access to your product images, lifestyle photos, GIFs, UGC videos, etc. How would you like to share?
                  </p>
                  
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {['Link to folder', 'Give me access'].map((option) => (
                      <label key={option} style={{
                        ...radioOptionStyle(formData.visualAssetsType === option.toLowerCase().replace(/[^a-z]/g, '-')),
                        flex: '1 1 auto',
                        minWidth: '140px',
                        justifyContent: 'center',
                        fontSize: '13px'
                      }}>
                        <input
                          type="radio"
                          name="visualAssetsType"
                          value={option.toLowerCase().replace(/[^a-z]/g, '-')}
                          checked={formData.visualAssetsType === option.toLowerCase().replace(/[^a-z]/g, '-')}
                          onChange={handleChange}
                          style={{ accentColor: '#111111' }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {formData.visualAssetsType === 'link-to-folder' && (
                    <input
                      type="url"
                      name="visualAssetsLink"
                      value={formData.visualAssetsLink}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/... or Dropbox link"
                      style={inputStyle}
                    />
                  )}

                  {formData.visualAssetsType === 'give-me-access' && (
                    <div>
                      <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '8px' }}>
                        Please share access with: <strong>riley@thedeadletteragency.com</strong>
                      </p>
                      <input
                        type="text"
                        name="visualAssetsAccess"
                        value={formData.visualAssetsAccess}
                        onChange={handleChange}
                        placeholder="Where do you house your assets? (Google Drive, Dropbox, Brandfolder, etc.)"
                        style={inputStyle}
                      />
                    </div>
                  )}
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Average Shipping & Fulfillment Timeline *</label>
                  <p style={hintStyle}>
                    How long from order to delivery? (Helps with post-purchase email timing)
                  </p>
                  <input
                    type="text"
                    name="shippingTimeline"
                    value={formData.shippingTimeline}
                    onChange={handleChange}
                    placeholder="e.g., 3-5 business days, 7-10 days international"
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '0'
                }}>
                  <label style={labelStyle}>Emails From a Real Person *</label>
                  <p style={hintStyle}>
                    Some emails work best as a plain-text note from a founder or team member instead of a designed email from the brand. Are you OK with that?
                  </p>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {[
                      ['yes', 'Yes'],
                      ['yes-review-first', 'Yes, but I want to read each one first'],
                      ['no', 'No, keep it from the brand']
                    ].map(([value, text]) => (
                      <label key={value} style={{
                        ...radioOptionStyle(formData.founderEmails === value),
                        flex: '1 1 auto',
                        minWidth: '140px',
                        justifyContent: 'center',
                        fontSize: '13px'
                      }}>
                        <input
                          type="radio"
                          name="founderEmails"
                          value={value}
                          checked={formData.founderEmails === value}
                          onChange={handleChange}
                          style={{ accentColor: '#111111' }}
                          required
                        />
                        {text}
                      </label>
                    ))}
                  </div>
                  {(formData.founderEmails === 'yes' || formData.founderEmails === 'yes-review-first') && (
                    <input
                      type="text"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleChange}
                      placeholder="Whose name should they come from? (name and role)"
                      style={inputStyle}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Discount Strategy */}
            {currentStep === 4 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
                  Discount Strategy
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  These help me build your flows with the right offers.
                </p>

                <div style={{
                  background: '#111111',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#f4f1ea' }}>
                    💡 Why This Matters
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9 }}>
                    Strategic discounting converts browsers into buyers. I'll use these to create compelling offers in your welcome series, abandoned cart recovery, and win-back flows.
                  </p>
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>New Customer Discount *</label>
                  <p style={hintStyle}>
                    What's the highest discount % you're willing to offer new subscribers? (One-time use in Welcome Series)
                  </p>
                  <select
                    name="newCustomerDiscount"
                    value={formData.newCustomerDiscount}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="">Select percentage...</option>
                    <option value="5">5% off</option>
                    <option value="10">10% off</option>
                    <option value="15">15% off</option>
                    <option value="20">20% off</option>
                    <option value="25">25% off</option>
                    <option value="free-shipping">Free Shipping Only</option>
                    <option value="none">No discount</option>
                    <option value="other">Other (specify in notes)</option>
                  </select>
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Open to Follow-Up Discount? *</label>
                  <p style={hintStyle}>
                    Are you open to offering a follow-up discount to new customers after ~4 weeks if they haven't purchased?
                  </p>
                  <select
                    name="followUpOpen"
                    value={formData.followUpOpen}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Maybe - let's discuss</option>
                  </select>
                </div>

                {formData.followUpOpen === 'yes' && (
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Follow-Up Discount %</label>
                    <p style={hintStyle}>
                      This is often lower than the initial offer since it's a second chance.
                    </p>
                    <select
                      name="followUpDiscount"
                      value={formData.followUpDiscount}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select percentage...</option>
                      <option value="5">5% off</option>
                      <option value="10">10% off</option>
                      <option value="15">15% off</option>
                      <option value="free-shipping">Free Shipping Only</option>
                      <option value="same">Same as initial offer</option>
                    </select>
                  </div>
                )}

                <div style={fieldGroup}>
                  <label style={labelStyle}>Abandoned Cart Discount *</label>
                  <p style={hintStyle}>
                    What % discount are you comfortable using to recover abandoned carts? (Most brands match their new customer offer)
                  </p>
                  <select
                    name="abandonedCartDiscount"
                    value={formData.abandonedCartDiscount}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="">Select percentage...</option>
                    <option value="5">5% off</option>
                    <option value="10">10% off</option>
                    <option value="15">15% off</option>
                    <option value="20">20% off</option>
                    <option value="25">25% off</option>
                    <option value="free-shipping">Free Shipping Only</option>
                    <option value="none">No discount (reminder only)</option>
                    <option value="other">Other (specify in notes)</option>
                  </select>
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px dashed #e8e4df',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '14px',
                  color: '#6b6560',
                  lineHeight: '1.6'
                }}>
                  <strong style={{ color: '#111111' }}>📊 How I use these:</strong> Your new customer offer is delivered in the first welcome email. Abandoned cart and checkout emails lead with reminders, and an offer only appears from the third email, so you're not discounting orders that would have come in anyway.
                </div>
              </div>
            )}

            {/* Step 5: Partnership Goals */}
            {currentStep === 5 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
                  Goals & Timing
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  Help me understand what success looks like for you, and when we start.
                </p>

                <div style={fieldGroup}>
                  <label style={labelStyle}>What does a successful partnership look like for you? *</label>
                  <p style={hintStyle}>
                    Beyond the numbers, what would make this partnership feel like a win?
                  </p>
                  <textarea
                    name="successLooksLike"
                    value={formData.successLooksLike}
                    onChange={handleChange}
                    placeholder="e.g., I want to feel confident that email is handled, have consistent revenue coming in, not have to think about it day-to-day..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    required
                  />
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>What would make you look back in a few months and feel happy with the results? *</label>
                  <p style={hintStyle}>
                    What would I need to do for you to feel like this was worth it?
                  </p>
                  <textarea
                    name="happyResults"
                    value={formData.happyResults}
                    onChange={handleChange}
                    placeholder="e.g., Hitting 30%+ email revenue, seeing consistent flow performance, having great-looking emails that match our brand, fast communication..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    required
                  />
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>When can we go live? *</label>
                  <p style={hintStyle}>
                    The earliest date I can start sending from your account, and anything standing in the way (another agency finishing up, a platform move, a launch).
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                    <input
                      type="text"
                      name="goLiveDate"
                      value={formData.goLiveDate}
                      onChange={handleChange}
                      placeholder="e.g., ASAP or Nov 1"
                      style={inputStyle}
                      required
                    />
                    <input
                      type="text"
                      name="goLiveBlockers"
                      value={formData.goLiveBlockers}
                      onChange={handleChange}
                      placeholder="Anything in the way? (optional)"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Key Dates in the Next 90 Days</label>
                  <p style={hintStyle}>
                    Launches, restocks, sales and events I should plan around.
                  </p>
                  <textarea
                    name="keyDates"
                    value={formData.keyDates}
                    onChange={handleChange}
                    placeholder="e.g., New product drops Nov 12, Black Friday sale Nov 27-30, restock mid-December..."
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Dates We Should Not Send</label>
                  <input
                    type="text"
                    name="noSendDates"
                    value={formData.noSendDates}
                    onChange={handleChange}
                    placeholder="e.g., Dec 24-25, company closure the first week of January"
                    style={inputStyle}
                  />
                </div>

                <div style={fieldGroup}>
                  <label style={labelStyle}>Anything Else I Should Know?</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Concerns, preferences, questions..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #111111',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '14px',
                  color: '#111111',
                  lineHeight: '1.6'
                }}>
                  <strong>✅ Almost done!</strong> Once you submit, you'll be able to book your onboarding call on the next screen.
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                style={{
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#6b6560',
                  background: '#fff',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit'
                }}
              >
                ← Back
              </button>
            ) : <div />}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                style={{
                  padding: '14px 32px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#fff',
                  background: '#111111',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  boxShadow: '0 4px 14px rgba(17, 17, 17, 0.25)'
                }}
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '16px 40px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: isSubmitting ? '#6b6560' : '#f4f1ea',
                  background: isSubmitting 
                    ? '#e8e4df' 
                    : '#111111',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(17, 17, 17, 0.35)'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Onboarding ✓'}
              </button>
            )}
          </div>
        </form>

        {/* Footer */}
        <p style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '13px',
          color: '#8a8580'
        }}>
          Questions? Reach me at riley@thedeadletteragency.com or (661) 210-5536
          <br />
          <span style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '11px', display: 'inline-block', marginTop: '10px' }}>Dead Letter</span>
        </p>
      </div>
    </div>
  )
}
