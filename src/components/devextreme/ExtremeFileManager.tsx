import React from 'react';
import FileManager, { Permissions } from 'devextreme-react/file-manager';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
import { Popup } from 'devextreme-react/popup';
import { CurrentDirectoryChangedEvent, SelectedFileOpenedEvent } from 'devextreme/ui/file_manager';
import { Cancelable, EventInfo } from 'devextreme/events';
import dxPopup from 'devextreme/ui/popup';

type ImageItem = {
    name: string,
    url: string
}

const ExtremeFileManager: React.FC = () => {
    const [currentPath, setCurrentPath] = React.useState<string>('Widescreen');
    const [popupVisible, setPopupVisble] = React.useState<boolean>(false);
    const [imageItemToDisplay, setImageItemToDisplay] = React.useState<ImageItem>({name: '', url: ''})

    const remoteProvider = new RemoteFileSystemProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images'
      });

    function displayImagePopup(e: SelectedFileOpenedEvent): void {
        setPopupVisble(true);
        setImageItemToDisplay({name: e.file.name, url: e.file.dataItem.url})
    }
    
    function hideImagePopup(e: Cancelable & EventInfo<dxPopup>): void {
        setPopupVisble(false);
    }

    function onCurrentDirectoryChanged(e: CurrentDirectoryChangedEvent): void {
        setCurrentPath(e.component.option('currentPath'));
    }

    return(
        <div className="h-full" >
            <FileManager
                currentPath={currentPath}
                fileSystemProvider={remoteProvider}
                onSelectedFileOpened={displayImagePopup}
                onCurrentDirectoryChanged={onCurrentDirectoryChanged}
            >
            <Permissions
                create={true}
                copy={true}
                move={true}
                delete={true}
                rename={true}
                upload={true}
                download={true}
            />
            </FileManager>

            <Popup
                maxHeight={600}
                closeOnOutsideClick={true}
                title={imageItemToDisplay.name}
                visible={popupVisible}
                onHiding={hideImagePopup}
                className="photo-popup-content"
            >

            <img src={imageItemToDisplay.url} className="photo-popup-image" />
            </Popup>
        </div>
    )
}

export default ExtremeFileManager;