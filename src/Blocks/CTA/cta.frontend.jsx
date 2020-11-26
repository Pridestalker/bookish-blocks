import React from 'react';

export function save({ attributes }) {
    const { img, title, url } = attributes;

    return (
        <figure className={'category-cta'}>
            <picture>
                <img src={`/?p=${img}`} loading={'lazy'} />
            </picture>
            <figcaption>
                {title}
            </figcaption>
            <a href={url} title={title} name={title} />
        </figure>
    );
}
