<?php get_header(); ?>
<main>
  <section class="page-hero">
    <div class="container-narrow">
      <?php while ( have_posts() ) : the_post(); ?>
      <h1><?php the_title(); ?></h1>
      <div class="page-content" style="margin-top:2rem;font-size:1rem;line-height:1.8;color:var(--charcoal-mid)">
        <?php the_content(); ?>
      </div>
      <?php endwhile; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
