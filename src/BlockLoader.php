<?php

namespace Blocks;

use Blocks\Blocks\CTA\CTA;

class BlockLoader
{
    protected array $blocks = [];

    public function boot() {
        $this->blocks = apply_filters(
            'block-plugin-template/block-loader/blocks', [
                CTA::class,
            ]
        );
    }

    public function register()
    {
        foreach ($this->blocks as $block) {
            (new $block)();
        }
    }
}
