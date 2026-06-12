<?php
$contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$faqs = [
  ['q'=>'What is a Registered Dietitian and how are they different from a nutritionist?','a'=>'A Registered Dietitian (RD) is a protected title regulated by the Health and Care Professions Council (HCPC). Only those who have completed an approved degree and are registered with the HCPC can legally use this title. Dietitians are the only nutrition professionals qualified to provide medical nutrition therapy and treat clinical conditions. The title "nutritionist" is not legally protected — anyone can use it.'],
  ['q'=>'Do I need a GP referral to see Jackie?','a'=>'No — you can self-refer directly. Simply get in touch via the contact form or phone, and we\'ll book you in. Jackie does work alongside GPs and consultants, but a referral is not required for private appointments.'],
  ['q'=>'Are consultations available online?','a'=>'Yes. Jackie offers consultations via video call (Zoom or equivalent), telephone, and in-person. Online appointments are available including evenings and weekends to fit around your schedule.'],
  ['q'=>'How many sessions will I need?','a'=>'This depends on your goals and health condition. Many clients see significant improvements within 6–8 weeks. For complex conditions like IBS or diabetes, a structured programme of 3–5 sessions tends to produce the best outcomes. Jackie will discuss this with you at your initial consultation.'],
  ['q'=>'Is Jackie registered and insured?','a'=>'Yes. Jackie is registered with the Health and Care Professions Council (HCPC) and is a member of the British Dietetic Association (BDA). She holds full professional indemnity insurance.'],
  ['q'=>'Can you help with nutrition after a stroke or brain injury?','a'=>'Yes — this is a specialist area Jackie has worked in throughout her NHS career. Acquired brain injury, including stroke and traumatic brain injury, creates complex nutritional challenges: dysphagia, significant fatigue, altered taste and smell, cognitive changes that affect eating behaviour, and malnutrition risk. Jackie provides individualised dietetic support that addresses all of these, and also supports families and carers at home.'],
  ['q'=>'Can you support me if I\'m taking a GLP-1 medication like Ozempic, Wegovy or Mounjaro?','a'=>'Yes. GLP-1 medications reduce appetite substantially, which creates a real risk of inadequate protein intake and muscle loss if nutrition isn\'t managed carefully. Jackie provides evidence-based guidance on eating well within the constraints of reduced hunger, protecting lean muscle, and building dietary habits that support your health in the long term.'],
  ['q'=>'Can consultations be claimed on health insurance?','a'=>'Many private health insurance policies cover dietitian consultations. Jackie recommends checking with your provider before booking. She can provide receipts and clinical notes for insurance claims.'],
];
?>
<div class="faq-grid">
  <div>
    <div class="eyebrow">Common Questions</div>
    <h2 style="margin-bottom:1.5rem">Frequently Asked Questions</h2>
    <p class="colour-mid" style="margin-bottom:2rem">Everything you need to know before booking. Don't see your question? <a href="<?php echo esc_url($contact_url); ?>" style="color:var(--sage);text-decoration:underline">Get in touch</a>.</p>
    <div style="background:var(--sage-pale);border:1px solid rgba(58,95,74,0.15);border-radius:calc(var(--radius)*1.8);padding:1.5rem;">
      <p style="font-weight:600;color:var(--sage);margin-bottom:0.5rem">Still have questions?</p>
      <p class="colour-mid text-sm" style="margin-bottom:1rem">Book a free 20-minute discovery call and Jackie will answer everything.</p>
      <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary btn-sm">Book Free Call</a>
    </div>
  </div>

  <div class="faq-list">
    <?php foreach ( $faqs as $i => $faq ) : ?>
    <div class="faq-item<?php echo $i===0 ? ' open' : ''; ?>">
      <button class="faq-question">
        <span><?php echo esc_html($faq['q']); ?></span>
        <?php echo jgw_icon('chevron-down'); ?>
      </button>
      <div class="faq-answer"><?php echo esc_html($faq['a']); ?></div>
    </div>
    <?php endforeach; ?>
  </div>
</div>
