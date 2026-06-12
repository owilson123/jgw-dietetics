<?php get_header(); ?>

<?php
$img_url = get_template_directory_uri() . '/assets/images/jackie-wilson.jpg';
$contact_url = ($p = get_page_by_path('contact')) ? get_permalink($p) : home_url('/contact/');
$services_url = ($p = get_page_by_path('services')) ? get_permalink($p) : home_url('/services/');

$specialisms = [
  'IBS &amp; Digestive Health',
  'Low FODMAP Programme',
  'Type 1 &amp; 2 Diabetes',
  'Brain Injury Rehabilitation',
  'GLP-1 Medication Support',
  'Lifestyle Nutrition',
  'Family Nutrition',
];
?>

<!-- ── HERO ─────────────────────────────────────────────── -->
<section class="hero">
  <div class="container-wide">
    <div class="hero-inner">

      <!-- Text content -->
      <div class="hero-content">

        <!-- Mobile strip -->
        <div class="hero-mobile-strip">
          <div class="hero-mobile-avatar">
            <img src="<?php echo esc_url($img_url); ?>" alt="Jackie Wilson RD" loading="eager">
          </div>
          <div>
            <div class="hero-mobile-name">Jackie Wilson RD</div>
            <div class="hero-mobile-sub">Specialist Registered Dietitian &middot; 30+ Years</div>
          </div>
        </div>

        <!-- Eyebrow -->
        <div class="hero-eyebrow">
          <span class="dot"></span>
          <span class="hero-eyebrow-short">REGISTERED DIETITIAN &middot; SOUTH WEST</span>
          <span class="hero-eyebrow-full">SPECIALIST REGISTERED DIETITIAN &middot; SOUTH WEST ENGLAND</span>
        </div>

        <!-- Headline -->
        <h1>Evidence-Based <em>Dietetic Care</em> That Fits Real Life</h1>

        <p class="hero-sub">Helping you improve digestive health, manage diabetes, and build a healthier relationship with food through truly personalised dietetic support.</p>

        <!-- CTAs -->
        <div class="hero-ctas">
          <a href="<?php echo esc_url($contact_url); ?>" class="btn btn-primary">
            Book a Free Discovery Call <?php echo jgw_icon('arrow-right'); ?>
          </a>
          <a href="tel:07770769322" class="btn btn-outline">
            <?php echo jgw_icon('phone'); ?> 07770 769322
          </a>
        </div>

        <!-- Credentials -->
        <div class="hero-creds">
          <div class="hero-cred"><span class="hero-cred-abbr">HCPC</span><span class="hero-cred-full">Registered Dietitian</span></div>
          <div class="hero-cred"><span class="hero-cred-abbr">BDA</span><span class="hero-cred-full">British Dietetic Association</span></div>
          <div class="hero-cred"><span class="hero-cred-abbr">NHS</span><span class="hero-cred-full">Specialist Experience</span></div>
          <div class="hero-cred"><span class="hero-cred-exp">30+</span><span class="hero-cred-full">Years Experience</span></div>
        </div>

      </div><!-- .hero-content -->

      <!-- Profile card (desktop) -->
      <div class="hero-profile">
        <div class="hero-profile-inner">
          <div class="profile-card">
            <div class="profile-photo">
              <img src="<?php echo esc_url($img_url); ?>" alt="Jackie Wilson — Registered Dietitian" loading="eager">
            </div>
            <div class="profile-nameplate">
              <div class="name">Jackie Wilson</div>
              <div class="sub">Registered Dietitian &middot; 30+ Years</div>
            </div>
            <div class="profile-specialisms">
              <?php foreach ( $specialisms as $s ) : ?>
              <div class="profile-specialism">
                <?php echo jgw_icon('check-circle'); ?>
                <span><?php echo $s; ?></span>
              </div>
              <?php endforeach; ?>
              <div class="profile-cta">
                <a href="<?php echo esc_url($contact_url); ?>">Book a Free Discovery Call &rarr;</a>
              </div>
            </div>
          </div>

          <div class="profile-stats">
            <div class="profile-stat"><span class="val colour-sage">30+</span><span class="lbl">Years exp.</span></div>
            <div class="profile-stat"><span class="val" style="color:var(--gold);font-size:0.65rem;line-height:2">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span class="lbl">5-star rated</span></div>
            <div class="profile-stat"><span class="val colour-terracotta">NHS</span><span class="lbl">Specialist</span></div>
          </div>
        </div>
      </div>

    </div><!-- .hero-inner -->
  </div>
</section>

<!-- ── TRUST BAR ──────────────────────────────────────────── -->
<section class="trust-bar">
  <div class="container-wide">
    <div class="trust-bar-grid">
      <?php
      $trust = [
        ['icon'=>'check-circle', 'label'=>'HCPC Registered',    'sub'=>'Health &amp; Care Professions Council'],
        ['icon'=>'star',         'label'=>'BDA Member',          'sub'=>'British Dietetic Association'],
        ['icon'=>'clock',        'label'=>'30+ Years Experience','sub'=>'NHS &amp; private practice'],
        ['icon'=>'activity',     'label'=>'NHS Specialist',      'sub'=>'Consultant-level expertise'],
        ['icon'=>'calendar',     'label'=>'Free Discovery Call', 'sub'=>'No obligation consultation'],
      ];
      foreach ( $trust as $t ) : ?>
      <div class="trust-item">
        <div class="trust-icon"><?php echo jgw_icon($t['icon']); ?></div>
        <div>
          <div class="trust-label"><?php echo $t['label']; ?></div>
          <div class="trust-sub"><?php echo $t['sub']; ?></div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── SERVICES OVERVIEW ──────────────────────────────────── -->
<section class="section-padding bg-off-white">
  <div class="container-wide">
    <div class="section-header">
      <div class="section-header-row">
        <div>
          <div class="eyebrow">Areas of Expertise</div>
          <h2>Specialist Support for<br>Your Specific Needs</h2>
        </div>
        <a href="<?php echo esc_url($services_url); ?>" class="link-arrow">
          View all services <?php echo jgw_icon('arrow-right'); ?>
        </a>
      </div>
    </div>
    <?php get_template_part('template-parts/services-grid'); ?>
  </div>
</section>

<!-- ── WHY JACKIE ─────────────────────────────────────────── -->
<section class="section-padding bg-white">
  <div class="container-wide">
    <?php get_template_part('template-parts/why-jackie'); ?>
  </div>
</section>

<!-- ── TESTIMONIALS ───────────────────────────────────────── -->
<section class="section-padding testimonials-section">
  <div class="container-wide">
    <?php get_template_part('template-parts/testimonials'); ?>
  </div>
</section>

<!-- ── HOW IT WORKS ───────────────────────────────────────── -->
<section class="section-padding how-it-works">
  <div class="container-wide">
    <?php get_template_part('template-parts/how-it-works'); ?>
  </div>
</section>

<!-- ── PRICING SNAPSHOT ───────────────────────────────────── -->
<section class="section-padding bg-white">
  <div class="container-wide">
    <?php get_template_part('template-parts/pricing-snapshot'); ?>
  </div>
</section>

<!-- ── FAQ ───────────────────────────────────────────────── -->
<section class="section-padding bg-off-white">
  <div class="container-wide">
    <?php get_template_part('template-parts/faq'); ?>
  </div>
</section>

<!-- ── FINAL CTA ──────────────────────────────────────────── -->
<?php get_template_part('template-parts/final-cta'); ?>

<?php get_footer(); ?>
