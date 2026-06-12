<?php get_header(); ?>
<main>
  <section class="page-hero">
    <div class="container-narrow">
      <?php while ( have_posts() ) : the_post(); ?>
      <div class="eyebrow"><?php echo get_the_date(); ?></div>
      <h1><?php the_title(); ?></h1>
      <?php if ( has_post_thumbnail() ) : ?>
      <div style="margin:2rem 0;border-radius:calc(var(--radius)*1.8);overflow:hidden"><?php the_post_thumbnail('large'); ?></div>
      <?php endif; ?>
      <div class="page-content" style="margin-top:2rem;font-size:1rem;line-height:1.8;color:var(--charcoal-mid)">
        <?php the_content(); ?>
      </div>
      <?php endwhile; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
