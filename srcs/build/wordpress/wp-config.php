<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_name' );

/** MySQL database username */
define( 'DB_USER', 'db_user' );

/** MySQL database password */
define( 'DB_PASSWORD', 'db_pass' );

/** MySQL hostname */
define( 'DB_HOST', 'mariadb' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'WP_ALLOW_REPAIR', true );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j&u@>L,sz4MFprHzo<nH5ZRH/ckcwKTrDh|sv6s>[o]j9JrtraW-og?pL Um&RtB');
define('SECURE_AUTH_KEY',  'a+q[6Ig2J;!PB$KCoB$|$(F:/S-{z-P0/+y|-9,4?U<1AT/r_CsP3U++9>gKte|x');
define('LOGGED_IN_KEY',    'ex)c#0g{e//J7r9-x#bk2AqU+Jl(q7<c;Nc|`x:rtj^UVPoer*R_V|4QVu~0H1I9');
define('NONCE_KEY',        'c#7lw|2v/#snF8F-f+9|*ROO!A Pq)Ip~y+bmcmD[32iCX9:%O0?+<N+l%B4?P6|');
define('AUTH_SALT',        'MiGQDUqaMzr&K!o|%[g->0BP(OZ< o)|l%SH6eO;phy%Pd5u,<6t+`Whl%EjHdV6');
define('SECURE_AUTH_SALT', 'Ukow94/7(;7VoSHPV5ah:5!q,I2/t^&+q<c6-+5ka}^VM0``%8.zi Ne$G/4^5d4');
define('LOGGED_IN_SALT',   '*JG!2%jXFa&~>BXYTT:1Vk^lCd=R-c< ]/)nc+N|11Z(|alS$6PQwK@^Zeq-o[M~');
define('NONCE_SALT',       'xj[/,Uwt|trddh%2|mv,Bfp^+$D5}tpU5Vy9c51Z=^0MY(P[tO:K2Y1Q0<hN|ad7');

define( 'WP_REDIS_HOST', 'redis' );
define( 'WP_REDIS_PORT', 6379 );     
define( 'WP_CACHE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

// if(is_admin()) {
// 	add_filter('filesystem_method', create_function('$a', 'return "direct";' ));
// 	define( 'FS_CHMOD_DIR', 0751 );
// 	}
?>