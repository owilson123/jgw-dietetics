<?php $about_url = ($p=get_page_by_path('about')) ? get_permalink($p) : home_url('/about/'); ?>
<div class="why-jackie-grid">

  <!-- Quote card -->
  <div>
    <div class="quote-card">
      <div class="quote-mark">&ldquo;</div>
      <blockquote>I still get the same satisfaction I had on day one when a client tells me they feel better, that they understand their body, that they can finally eat without fear.</blockquote>
      <div class="quote-attribution">
        <div class="quote-avatar">J</div>
        <div>
          <div class="quote-name">Jackie Wilson RD</div>
          <div class="quote-role">Registered Dietitian &middot; 30+ Years Experience</div>
        </div>
      </div>
      <div class="quote-stat">
        <div class="stat-val">100%</div>
        <div class="stat-lbl">of clients would<br>recommend Jackie</div>
      </div>
    </div>
  </div>

  <!-- Reasons -->
  <div>
    <div class="eyebrow">Why Work With Jackie</div>
    <h2 class="mb-12">The Difference Expert Dietetic Support Makes</h2>
    <div class="reasons">
      <?php
      $reasons = [
        ['01','Specialist, Not Generalist', 'With over 30 years of NHS experience and a private practice focused on gut health, diabetes, and brain injury rehabilitation, Jackie brings specialist-level expertise you won\'t find in a general consultation.'],
        ['02','Practical, Not Prescriptive', 'Jackie understands real life — busy schedules, family meals, eating out, and the emotional side of food. Her advice is always achievable, not just clinically correct.'],
        ['03','Evidence-Based, Always', 'Every recommendation Jackie makes is grounded in current, peer-reviewed research. No fads, no trends — just what the science actually says, explained clearly.'],
        ['04','Genuinely Personalised', 'There\'s no one-size-fits-all approach here. Jackie takes the time to understand your unique history, symptoms, lifestyle, and goals before recommending anything.'],
      ];
      foreach ( $reasons as $r ) : ?>
      <div class="reason">
        <div class="reason-num"><?php echo $r[0]; ?></div>
        <div>
          <h3><?php echo esc_html($r[1]); ?></h3>
          <p><?php echo esc_html($r[2]); ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
    <div style="margin-top:2.5rem">
      <a href="<?php echo esc_url($about_url); ?>" class="link-arrow">
        Learn more about Jackie <?php echo jgw_icon('arrow-right'); ?>
      </a>
    </div>
  </div>

</div>
