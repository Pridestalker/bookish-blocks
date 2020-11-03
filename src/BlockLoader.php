<?php

namespace Blocks;

class BlockLoader
{
    protected array $blocks = [];

    public function boot() {
        $this->blocks = apply_filters(
            'block-plugin-template/block-loader/blocks', []
        );
    }

    public function register()
    {
        foreach ($this->blocks as $block) {
            (new $block)();
        }
    }
}
