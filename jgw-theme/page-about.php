<?php get_header(); ?>
<?php $contact_url = ($p=get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/'); ?>

<section class="page-hero">
  <div class="container-wide">
    <div class="page-hero-2col">
      <div>
        <div class="eyebrow">About Jackie</div>
        <h1>Three Decades of Helping People Feel Better</h1>
        <p class="lead">Jackie Wilson is a Specialist Registered Dietitian with over 30 years of clinical experience in the NHS and private practice. She brings rare depth of expertise to every consultation, alongside a genuinely warm and practical approach.</p>
        <div class="credential-chips">
          <?php foreach(['HCPC Registered','BDA Member','NHS Specialist','30+ Years Experience'] as $c) : ?>
          <span class="credential-chip"><?php echo jgw_icon('check-circle'); ?><?php echo esc_html($c); ?></span>
          <?php endforeach; ?>
        </div>
        <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">Book a Free Discovery Call <?php echo jgw_icon('arrow-right'); ?></a>
      </div>
      <div style="display:flex;justify-content:flex-start">
        <div class="portrait-card" style="position:relative">
          <div class="portrait-photo-wrap">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/jackie-wilson.jpg" alt="Jackie Wilson — Specialist Registered Dietitian">
          </div>
          <div class="portrait-nameplate">
            <div class="name">Jackie Wilson RD</div>
            <div class="sub">Specialist Registered Dietitian &middot; 30+ Years</div>
          </div>
          <div class="portrait-offset"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-narrow">
    <h2 style="margin-bottom:2rem">The Person Behind the Practice</h2>
    <div style="display:flex;flex-direction:column;gap:1.5rem;font-size:1.05rem;line-height:1.8;color:var(--charcoal-mid)">
      <p>Jackie didn't become a dietitian by accident. From early in her career, she was drawn to the complexity of how nutrition affects people's lives — not just their bodies, but their confidence, their relationships with food, their quality of life.</p>
      <p>Over 30 years working within the NHS, she developed specialist expertise in areas that are often poorly understood and inadequately supported: gut health and IBS, diabetes management, and neurological rehabilitation including brain injury recovery. She has seen the transformation that the right guidance can bring — and the frustration people experience when they don't get it.</p>
      <p>"I still get the same satisfaction I had on day one," she says. "When a client tells me they feel better, that they understand their body, that they can finally eat without fear — that never gets old."</p>
      <p>As a parent herself, Jackie understands the complexity of family nutrition — the competing tastes, the time pressures, the challenge of helping teenagers develop healthy habits. Her advice is always grounded in real life, not ideal conditions.</p>
      <p>She still practises part-time for the NHS, ensuring she remains at the cutting edge of clinical dietetics — and bringing that expertise directly to her private clients.</p>
    </div>
  </div>
</section>

<section class="section-padding bg-off-white">
  <div class="container-wide">
    <div style="text-align:center;margin-bottom:3rem">
      <div class="eyebrow">Career Journey</div>
      <h2>30 Years of Expertise</h2>
    </div>
    <div class="timeline" style="max-width:680px;margin:0 auto">
      <?php
      $timeline = [
        ['Early 1990s','90s','Qualified as a Registered Dietitian','Jackie completed her graduate qualification in Nutrition and Dietetics — the only legally recognised dietetic qualification in the UK.'],
        ['1993–Present','NHS','NHS Specialist Dietitian','Building specialist expertise in gastroenterology, diabetes, and neurological rehabilitation, working alongside consultants and GP practices across the South West.'],
        ['2000s','2000s','IBS &amp; FODMAP Specialist','As the evidence base for Low FODMAP therapy developed, Jackie became one of the UK\'s most experienced practitioners of this approach.'],
        ['2010s','JGW','Founded JGW Dietetics','Launched her private practice to offer specialist NHS-quality expertise directly to individuals who needed flexible, personalised support.'],
        ['Today','Now','30+ Years and Still Passionate','Jackie continues to combine NHS specialist work with her private practice — bringing the full depth of her experience to every client.'],
      ];
      foreach ($timeline as $t) : ?>
      <div class="timeline-item">
        <div class="timeline-dot"><?php echo esc_html($t[1]); ?></div>
        <div class="timeline-year"><?php echo $t[0]; ?></div>
        <div class="timeline-title"><?php echo $t[2]; ?></div>
        <div class="timeline-desc"><?php echo esc_html($t[3]); ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-wide">
    <div style="text-align:center;margin-bottom:3rem">
      <div class="eyebrow">Approach &amp; Values</div>
      <h2>How Jackie Works</h2>
    </div>
    <div class="values-grid">
      <?php
      $values = [
        ['Evidence First','Every recommendation is grounded in current, peer-reviewed research. No trends, no fads.'],
        ['Practical Always','Brilliant advice that\'s impossible to follow is useless. Jackie makes it achievable.'],
        ['Genuinely Personal','Two people with the same diagnosis may need completely different support. Jackie recognises this.'],
        ['Warmly Human','Food is personal, emotional, and cultural. Jackie meets you where you are.'],
      ];
      foreach ($values as $v) : ?>
      <div class="value-card">
        <div class="value-icon"><?php echo jgw_icon('check-circle'); ?></div>
        <h3><?php echo esc_html($v[0]); ?></h3>
        <p><?php echo esc_html($v[1]); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/final-cta'); ?>
<?php get_footer(); ?>
