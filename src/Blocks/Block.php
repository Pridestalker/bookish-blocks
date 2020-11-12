<?php

namespace Blocks\Blocks;

use Blocks\Plugin;

abstract class Block
{
    protected $namespace;
    protected $name;

    protected $server_rendered = false;

    public function __invoke() {
        $this->register_assets();
        $this->register_block();
    }

    protected function register_assets()
    {
        wp_register_script(
            'webreact-brantjes-block-' . $this->name,
            plugins_url('dist/scripts/' . $this->name . '.js', BPT_FILE),
            [],
            filemtime(Plugin::getBlockBasePath() . ucfirst($this->name) . '/' . $this->name . '.js')
        );

        wp_localize_script(
            'webreact-brantjes-block-' . $this->name,
            'config',
            [
                'namespace' => $this->namespace,
                'name' => $this->name,
            ]
        );
    }

    protected function register_block()
    {
        $attributes = [
            'editor_script' => 'webreact-brantjes-block-' . $this->name,
        ];

        if ($this->server_rendered) {
            $attributes['render_callback'] = [(new static), 'render'];
        }

        register_block_type(
            $this->namespace . '/' . $this->name,
            $attributes
        );
    }

    public function render($attributes) {}
}
