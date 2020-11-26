import React from 'react';
import {Component} from '@wordpress/element';
import {
    MediaUpload, MediaUploadCheck,
    PlainText,
    URLInput
} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

export class Edit extends Component {
    constructor(props) {
        super(props);

        this.handleMediaUploadChange = this.handleMediaUploadChange.bind(this);

        this._renderMediaUpload = this._renderMediaUpload.bind(this);
        this._renderLabelInput = this._renderLabelInput.bind(this);
        this._renderUrlInput = this._renderUrlInput.bind(this);
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
        const { title } = this.props.attributes;
        return (
            <PlainText
                value={title}
                onChange={title => this.props.setAttributes({ title })}
                placeholder={'Begin met schrijven om een label in te vullen.'}/>
        )
    }

    _renderUrlInput() {
        const { url } = this.props.attributes;

        return (
            <PlainText
                value={url}
                onChange={url => this.props.setAttributes({ url })}
                placeholder={'Plaats hier de link naar de pagina'} />
        );
    }

    render() {
        return (
            <section>
                {this._renderMediaUpload()}
                {this._renderLabelInput()}
                {this._renderUrlInput()}
            </section>
        )
    }

}
