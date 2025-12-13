'use client'

import { useState } from 'react'

// ⚠️ REPLACE THIS WITH YOUR FORMSPREE FORM ID
// Sign up at https://formspree.io and create a form to get your ID
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
    
    // Communication
    preferredChannel: '',
    slackWorkspace: '',
    discordServer: '',
    whatsappNumber: '',
    otherContact: '',
    
    // Access
    shopifyUrl: '',
    collaboratorCode: '',
    klaviyoStatus: '',
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
    
    // Discount Strategy
    newCustomerDiscount: '',
    followUpDiscount: '',
    followUpOpen: '',
    abandonedCartDiscount: '',
    
    // Partnership Goals
    successLooksLike: '',
    happyResults: '',
    additionalNotes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Onboarding: ${formData.companyName}`,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('There was an error submitting the form. Please try again or contact riley@kelpcopy.com directly.')
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again or contact riley@kelpcopy.com directly.')
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
    color: '#2d2926',
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
    border: `2px solid ${isSelected ? '#c9a227' : '#e8e4df'}`,
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
        background: 'linear-gradient(165deg, #f8f6f3 0%, #ebe7e1 100%)',
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
          boxShadow: '0 25px 80px rgba(45, 41, 38, 0.08)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c43 100%)',
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
          <h2 style={{ fontSize: '32px', color: '#2d2926', marginBottom: '16px', fontWeight: '700' }}>
            You're All Set!
          </h2>
          <p style={{ fontSize: '17px', color: '#6b6560', lineHeight: '1.7' }}>
            Thanks for completing the onboarding form. I'll review your information and reach out within 24-48 hours to get started.
          </p>
          <div style={{
            marginTop: '32px',
            padding: '20px',
            background: '#faf8f5',
            borderRadius: '12px',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#2d2926', marginBottom: '8px' }}>
              ⏳ What happens next:
            </p>
            <ul style={{ fontSize: '14px', color: '#6b6560', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>I'll request Klaviyo & Shopify access</li>
              <li>Review your brand assets</li>
              <li>Connect via your preferred channel</li>
              <li>Get started on your email strategy</li>
            </ul>
          </div>
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#2d2926',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '14px'
          }}>
            <p style={{ margin: 0, opacity: 0.8 }}>Questions? Reach me directly:</p>
            <p style={{ margin: '8px 0 0', fontWeight: '600' }}>
              riley@kelpcopy.com · (661) 210-5536
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(165deg, #f8f6f3 0%, #ebe7e1 100%)',
      fontFamily: 'var(--font-dm-sans), -apple-system, sans-serif',
      padding: '40px 20px'
    }}>
      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: #c9a227 !important;
          box-shadow: 0 0 0 4px rgba(201, 162, 39, 0.1) !important;
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
            background: '#2d2926',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#c9a227' }}>◆</span>
            Client Onboarding
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '42px',
            fontWeight: '700',
            color: '#2d2926',
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
            {['Contact', 'Access', 'Brand', 'Discounts', 'Goals'].map((label, i) => (
              <div key={i} style={{
                fontSize: '12px',
                fontWeight: '600',
                color: currentStep >= i + 1 ? '#2d2926' : '#b5b0ab',
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
              background: 'linear-gradient(90deg, #c9a227 0%, #dbb842 100%)',
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
            boxShadow: '0 25px 80px rgba(45, 41, 38, 0.08)',
            marginBottom: '24px'
          }}>
            
            {/* Step 1: Contact & Communication */}
            {currentStep === 1 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d2926', marginBottom: '8px' }}>
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
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2d2926', marginBottom: '16px' }}>
                    💬 Preferred Communication Channel *
                  </h3>
                  <p style={{ ...hintStyle, marginBottom: '16px' }}>
                    How would you like us to stay in touch? Please add me to your workspace or provide your contact details.
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
                          style={{ accentColor: '#c9a227' }}
                        />
                        {channel}
                      </label>
                    ))}
                  </div>

                  {formData.preferredChannel === 'slack' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Slack Workspace</label>
                      <p style={hintStyle}>Please invite me to your Slack workspace, or share the workspace name/invite link.</p>
                      <input
                        type="text"
                        name="slackWorkspace"
                        value={formData.slackWorkspace}
                        onChange={handleChange}
                        placeholder="workspace-name.slack.com or invite link"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {formData.preferredChannel === 'discord' && (
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Discord Server</label>
                      <p style={hintStyle}>Please share your Discord server invite link, or add me: @rileykelp</p>
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
                  background: '#2d2926',
                  borderRadius: '12px',
                  padding: '20px',
                  color: '#fff'
                }}>
                  <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>
                    <strong style={{ color: '#c9a227' }}>My contact info:</strong><br/>
                    📧 riley@kelpcopy.com<br/>
                    📱 (661) 210-5536
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Access */}
            {currentStep === 2 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d2926', marginBottom: '8px' }}>
                  Account Access
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  I need access to your accounts to get started.
                </p>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2d2926', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '20px' }}>📧</span> Klaviyo Access
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '16px', lineHeight: '1.6' }}>
                    I need <strong>"Manager"</strong> access to your Klaviyo account.<br/>
                    Go to: Settings → Account → Users → Add User (riley@kelpcopy.com)
                  </p>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Klaviyo Access Status *</label>
                    <select
                      name="klaviyoStatus"
                      value={formData.klaviyoStatus}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    >
                      <option value="">Select status...</option>
                      <option value="added-manager">✓ Added as Manager</option>
                      <option value="need-upgrade">Already added, but need to upgrade to Manager</option>
                      <option value="will-add">Will add after submitting this form</option>
                      <option value="need-help">Need help with this</option>
                    </select>
                  </div>
                </div>

                <div style={{
                  background: '#faf8f5',
                  border: '2px solid #e8e4df',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2d2926', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '20px' }}>🛒</span> Shopify Access
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6560', marginBottom: '16px', lineHeight: '1.6' }}>
                    Please share your <strong>4-digit collaborator code</strong> and store URL so I can request access.<br/>
                    Find it: Settings → Users and permissions → Collaborators
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Shopify Store URL *</label>
                      <input
                        type="text"
                        name="shopifyUrl"
                        value={formData.shopifyUrl}
                        onChange={handleChange}
                        placeholder="yourstore.myshopify.com"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>4-Digit Collaborator Code *</label>
                      <input
                        type="text"
                        name="collaboratorCode"
                        value={formData.collaboratorCode}
                        onChange={handleChange}
                        placeholder="1234"
                        maxLength={4}
                        style={{ ...inputStyle, letterSpacing: '0.3em', textAlign: 'center', fontWeight: '600' }}
                        required
                      />
                    </div>
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
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d2926', marginBottom: '8px' }}>
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
                          style={{ accentColor: '#c9a227' }}
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
                        Please share access to your brand guide folder with: <strong>riley@kelpcopy.com</strong>
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
                          style={{ accentColor: '#c9a227' }}
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
                        Please share access with: <strong>riley@kelpcopy.com</strong>
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
              </div>
            )}

            {/* Step 4: Discount Strategy */}
            {currentStep === 4 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d2926', marginBottom: '8px' }}>
                  Discount Strategy
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  These help me build your flows with the right offers.
                </p>

                <div style={{
                  background: 'linear-gradient(135deg, #2d2926 0%, #3d3936 100%)',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '28px',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#c9a227' }}>
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
                    What % discount to recover customers who abandoned their cart? (Ideally slightly higher than new customer offer)
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
                  <strong style={{ color: '#2d2926' }}>📊 Best Practice:</strong> New Customer 10-15% → Abandoned Cart 15-20% → Winback 20-25%. This escalates urgency without devaluing your brand.
                </div>
              </div>
            )}

            {/* Step 5: Partnership Goals */}
            {currentStep === 5 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d2926', marginBottom: '8px' }}>
                  Partnership Goals
                </h2>
                <p style={{ color: '#6b6560', marginBottom: '32px', fontSize: '15px' }}>
                  Help me understand what success looks like for you.
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
                  <label style={labelStyle}>Anything Else I Should Know?</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Upcoming launches, sales events, concerns, preferences, questions..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f0f7ee 0%, #e8f3e5 100%)',
                  border: '2px solid #c5dfc0',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '14px',
                  color: '#3d6b35',
                  lineHeight: '1.6'
                }}>
                  <strong>✅ Almost done!</strong> Once you submit, I'll review everything and we'll get started right away.
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
                  background: 'linear-gradient(135deg, #2d2926 0%, #4a4541 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  boxShadow: '0 4px 14px rgba(45, 41, 38, 0.25)'
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
                  color: '#2d2926',
                  background: isSubmitting 
                    ? '#e8e4df' 
                    : 'linear-gradient(135deg, #c9a227 0%, #dbb842 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(201, 162, 39, 0.35)'
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
          Questions? Reach me at riley@kelpcopy.com or (661) 210-5536
        </p>
      </div>
    </div>
  )
}
