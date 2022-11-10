
// Managers and factories
// import ComponentManager from './Layout/Manager'
import { layout } from 'eventfull-core-runtime';

// Components
import { register as registerAvatar } from './Avatar/Avatar';
import { registerButton } from './Button/Button';
import { registerCard } from './Card/Card';
import { registerImage } from './Image/Image';
import { registerList, registerDropdown } from './List/List';
import { registerText } from './Text/Text';
import { registerTree } from './Tree/Tree';
import { registerTable, registerDataGrid } from './Table/Table';
import { registerCheckbox, registerTextfield } from './Input/Input';
import { registerContainer, registerGrid, registerGridColumn, registerGridRow, registerView, registerAccordion, registerTabs, registerLayout } from './Grid/Grid';
import { registerDialog, registerPopup } from './Modal/Modal';

export default function registerComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
    }
    */
    registerAvatar(component_manager);
    registerButton(component_manager);
    registerCard(component_manager);
    registerImage(component_manager);
    registerList(component_manager);
    registerDropdown(component_manager);
    registerText(component_manager);
    registerTree(component_manager);
    registerTable(component_manager);
    registerDataGrid(component_manager);
    registerTextfield(component_manager);
    registerCheckbox(component_manager);

    registerAccordion(component_manager);
    registerTabs(component_manager);
    registerGrid(component_manager);
    registerGridColumn(component_manager);
    registerGridRow(component_manager);
    registerLayout(component_manager);
    registerView(component_manager);
    registerContainer(component_manager);
    registerDialog(component_manager);
    registerPopup(component_manager);

}