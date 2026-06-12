<?php $contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/'); ?>
<section class="section-padding final-cta">
  <div class="container-narrow">
    <div class="eyebrow" style="color:rgba(255,255,255,0.6);margin-bottom:1.5rem">Ready to Start?</div>
    <h2>Take the First Step Towards Better Health</h2>
    <p>A 20-minute free discovery call costs nothing and could change everything. Let's talk about your goals.</p>
    <div class="final-cta-btns">
      <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-white">
        Book Free Discovery Call <?php echo jgw_icon('arrow-right'); ?>
      </a>
      <a href="tel:07770769322" class="btn" style="border:2px solid rgba(255,255,255,0.4);color:#fff">
        <?php echo jgw_icon('phone'); ?> 07770 769322
      </a>
    </div>
    <p class="final-cta-note">Available for online consultations evenings &amp; weekends</p>
  </div>
</section>
