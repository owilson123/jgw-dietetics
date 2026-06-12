<?php $contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/'); ?>
<div style="margin-bottom:3rem;">
  <div class="eyebrow" style="color:var(--eucalyptus)">Simple Process</div>
  <h2 class="colour-white">Getting Started is Easy</h2>
  <p class="colour-stone" style="margin-top:0.75rem;max-width:36rem">From first contact to lasting change — a clear, supported journey every step of the way.</p>
</div>
<div class="steps-grid" style="margin-bottom:3rem;">
  <?php
  $steps = [
    ['01','Free Discovery Call',       'Start with a free 20-minute call to discuss your health goals. No obligation — just an honest conversation about how Jackie can help.'],
    ['02','Comprehensive Assessment',  'Your initial 60–90 minute consultation covers your full health history, dietary habits, lifestyle, and goals to build a complete picture.'],
    ['03','Personalised Plan',         'Jackie creates a bespoke, evidence-based dietetic plan tailored specifically to your needs — practical and achievable for real life.'],
    ['04','Ongoing Support',           'Regular follow-ups keep you on track, troubleshoot challenges, and refine your plan as you progress toward your goals.'],
  ];
  foreach ( $steps as $s ) : ?>
  <div class="step">
    <div class="step-number"><?php echo $s[0]; ?></div>
    <h3><?php echo esc_html($s[1]); ?></h3>
    <p><?php echo esc_html($s[2]); ?></p>
  </div>
  <?php endforeach; ?>
</div>
<div class="text-center">
  <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">
    Book Your Free Discovery Call <?php echo jgw_icon('arrow-right'); ?>
  </a>
</div>
