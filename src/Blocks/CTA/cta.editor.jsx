import React from 'react';
import {Component} from '@wordpress/element';
import {
    MediaUpload, MediaUploadCheck,
    URLInput,
    InspectorControls,
    PlainText
} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.handleMediaUploadChange = this.handleMediaUploadChange.bind(this);
    }

    handleMediaUploadChange(media) {
        this.props.setAttributes({
            img: media.id
        })
    }

    _renderMediaUpload() {
        const { img } = this.props.attributes;

        const mediaUploadOpenButton = ({open}) => (
            <Button onClick={open} className={'is-secondary'}>
                Open Media Library
            </Button>
        )

        return (
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={this.handleMediaUploadChange}
                    allowedTypes={['image']}
                    value={img}
                    render={mediaUploadOpenButton}/>
            </MediaUploadCheck>
        )
    }

    _renderLabelInput() {
        return (
            <PlainText />
        )
    }

    render() {
        return (
            <section>
                {this._renderMediaUpload()}
                {this._renderLabelInput()}
            </section>
        )
    }

}
