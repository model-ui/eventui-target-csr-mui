import React from 'react';
import { layout } from 'eventfull-core-runtime';

export function renderContent(classes, item) {
    let content = item.content;
    const content_type = typeof (content);
    if (content_type === 'object') {
        content = layout.Manager.ComponentManager.getInstance().getComponentInstance(content.type, content || {});
    } else {
        if (content_type !== 'string') {
            content = "Expected object for content having id " + item.id;
        }
    }
    return content;
}
