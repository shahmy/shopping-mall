<?php

/**
 * The template for displaying content in the single.php template.
 *
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<?php
		if ('shops' === get_post_type()) :
		?>
			<div class="entry-meta">
				<?php shopping_mall_article_posted_on(); ?>
			</div><!-- /.entry-meta -->
		<?php
		endif;
		?>
	</header><!-- /.entry-header -->
	<div class="entry-content">
		<?php
		if (has_post_thumbnail()) :
			echo '<div class="post-thumbnail">' . get_the_post_thumbnail(get_the_ID(), 'large') . '</div>';
		endif;

		the_content();

		wp_link_pages(array('before' => '<div class="page-link"><span>' . esc_html__('Pages:', 'shopping-mall') . '</span>', 'after' => '</div>'));
		?>

		<h3>Address:</h3>
		<p><?php echo the_field('address') ?></p>
		<p><a href="<?php echo the_field('location_map_link') ?>" target="_blank">Map Link </a></p>
		<?php if (have_rows('operating_hours')) : ?>
			<h3>Operating Hours:</h3>
			<table>
				<?php while (have_rows('operating_hours')) : the_row(); ?>
					<?php
					$days = get_sub_field('days');
					$time = get_sub_field('time');
					?>
					<tr>
						<td><?php echo $days ?></td>
						<td><?php echo $time ?></td>
					</tr>
				<?php endwhile; ?>
			</table>
		<?php endif; ?>

		<h3 class="mt-3">Gallery :</h3>


		<?php
		$images = get_field('gallery');
		if ($images) :
		?>

			<!-- Gallery -->
			<div class="row mb-3 mt-3">
				<?php foreach ($images as $image) : ?>
					<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
						<img src="<?php echo esc_url($image['url']); ?>" class="w-100 shadow-1-strong rounded mb-4" alt="<?php echo esc_attr($image['alt']); ?>" />
					</div>
				<?php endforeach; ?>

			</div>

		<?php endif; ?>
		<!-- Gallery -->

	</div><!-- /.entry-content -->

	<?php
	edit_post_link(__('Edit', 'shopping-mall'), '<span class="edit-link">', '</span>');
	?>


</article><!-- /#post-<?php the_ID(); ?> -->