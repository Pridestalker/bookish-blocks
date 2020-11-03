<?php

namespace Blocks;

class Plugin
{
    protected static $_base_dir = null;

    protected static $_instance = null;

    public static function make()
    {
        if (null === static::$_instance) {
            static::$_instance = new static;
        }

        return static::$_instance;
    }

    public static function getPluginBasePath() {
        if (null === static::$_base_dir) {
            static::$_base_dir = plugin_dir_path(BPT_FILE);
        }

        return static::$_base_dir;
    }

    public static function getBlockBasePath() {
        $base = static::getPluginBasePath();

        return trailingslashit($base) . 'src/blocks/';
    }

    private function __construct() {
        $loader = new BlockLoader();
        $loader->boot();
        $loader->register();
    }
    private function __clone() {}
}
