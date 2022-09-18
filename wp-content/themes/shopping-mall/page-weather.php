<?php

/**
 * Template Name: List Weather Details
 * Description: to list weather details
 *
 */

$current_date_time = date('Y-m-d\TH:i:s', current_time('timestamp', 0));

$response = wp_remote_get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=' . $current_date_time);
$weatherList2Hours = json_decode(wp_remote_retrieve_body($response));

$response_code = wp_remote_retrieve_response_code($response);


get_header();

the_post();
?>
<div id="post-<?php the_ID(); ?>" <?php post_class('content'); ?>>

	<?php if ($response_code == 200) : ?>

		<table class="table table-responsive mt-3">
			<thead>
				<tr>
					<th>Area</th>
					<th>Forecast</th>
				</tr>
			</thead>

			<tbody>

			<?php foreach($weatherList2Hours->items as $wlist): ?>

				<?php foreach($wlist->forecasts as $result): ?>

				<tr>
					<td><?php echo $result->area; ?></td>
					<td><?php echo $result->forecast; ?></td>
				</tr>

				<?php endforeach; ?>

				<tr>
					<td>Update Timestamp</td>
					<td><?php echo $wlist->update_timestamp ?></td>
				</tr>

			<?php endforeach; ?>	

			</tbody>

		</table>

	<?php endif; ?>

</div><!-- /#post-<?php the_ID(); ?> -->


<?php
get_footer();
