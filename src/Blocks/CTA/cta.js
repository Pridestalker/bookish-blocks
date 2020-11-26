import { registerBlockType } from "@wordpress/blocks";
import { Edit } from "./cta.editor";
import { save } from "./cta.frontend";

registerBlockType(
    `${config.namespace}/${config.name}`,
    {
        title: config.name,
        category: 'common',
        attributes: {
            img: {
                type: 'number',
            },
            title: {
                type: 'string',
            },
            url: {
                type: 'string',
            },
        },
        edit: Edit,
        save,
    }
)
