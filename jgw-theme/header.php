<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Top credentials bar (desktop only) -->
<div class="site-top-bar">
  <div class="container-wide inner">
    <div class="creds">
      <span><span class="cred-dot"></span>HCPC Registered Dietitian</span>
      <span><span class="cred-dot"></span>BDA Member</span>
      <span><span class="cred-dot"></span>30+ Years NHS Experience</span>
    </div>
    <div class="contacts">
      <a href="tel:07770769322"><?php echo jgw_icon('phone'); ?>&nbsp;07770 769322</a>
      <a href="mailto:info@jgw-dietetics.co.uk"><?php echo jgw_icon('mail'); ?>&nbsp;info@jgw-dietetics.co.uk</a>
    </div>
  </div>
</div>

<!-- Main header -->
<header class="site-header" id="site-header">
  <div class="container-wide">
    <div class="header-inner">

      <!-- Logo -->
      <a href="<?php echo esc_url( home_url('/') ); ?>" class="site-logo">
        <span class="logo-name">JGW Dietetics</span>
        <span class="logo-sub">Jackie Wilson &middot; Registered Dietitian</span>
      </a>

      <!-- Desktop nav -->
      <nav class="site-nav" aria-label="Primary navigation">
        <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container'      => false,
          'menu_class'     => '',
          'items_wrap'     => '%3$s',
          'walker'         => new JGW_Nav_Walker(),
          'fallback_cb'    => 'jgw_fallback_nav',
        ]);
        ?>
      </nav>

      <!-- Desktop CTA -->
      <div class="header-cta">
        <a href="tel:07770769322" class="header-phone">
          <?php echo jgw_icon('phone'); ?> 07770 769322
        </a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path('contact') ) ); ?>" class="btn btn-primary btn-sm">
          Book Free Call
        </a>
      </div>

      <!-- Mobile toggle -->
      <button class="menu-toggle" aria-expanded="false" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile nav -->
    <nav class="mobile-nav" aria-label="Mobile navigation">
      <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container'      => false,
        'menu_class'     => '',
        'items_wrap'     => '%3$s',
        'walker'         => new JGW_Nav_Walker(),
        'fallback_cb'    => 'jgw_fallback_nav',
      ]);
      ?>
      <div class="mobile-nav-ctas">
        <a href="tel:07770769322" class="btn btn-outline">
          <?php echo jgw_icon('phone'); ?> 07770 769322
        </a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path('contact') ) ); ?>" class="btn btn-primary">
          Book Free Discovery Call
        </a>
      </div>
    </nav>
  </div>
</header>

<!-- Mobile sticky CTA bar -->
<div class="mobile-cta-bar">
  <a href="tel:07770769322" class="cta-call">
    <?php echo jgw_icon('phone'); ?> Call Jackie
  </a>
  <a href="<?php echo esc_url( get_permalink( get_page_by_path('contact') ) ); ?>" class="cta-book">
    <?php echo jgw_icon('calendar'); ?> Book Free Call
  </a>
</div>

<?php
// Simple nav walker — outputs plain <a> tags
class JGW_Nav_Walker extends Walker_Nav_Menu {
  function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
    $classes = implode( ' ', $item->classes );
    $url = $item->url;
    $output .= '<a href="' . esc_url( $url ) . '" class="' . esc_attr( $classes ) . '">' . esc_html( $item->title ) . '</a>';
  }
  function end_el( &$output, $item, $depth = 0, $args = null ) {}
  function start_lvl( &$output, $depth = 0, $args = null ) {}
  function end_lvl( &$output, $depth = 0, $args = null ) {}
}

function jgw_fallback_nav() {
  $pages = [
    'About Jackie'          => 'about',
    'Services'              => 'services',
    'Pricing'               => 'programmes',
    'Testimonials'          => 'success-stories',
    'Disclosure & Privacy'  => 'disclosure',
    'Contact'               => 'contact',
  ];
  foreach ( $pages as $label => $slug ) {
    $page = get_page_by_path( $slug );
    $url  = $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
    echo '<a href="' . esc_url( $url ) . '">' . esc_html( $label ) . '</a>';
  }
}
?>
