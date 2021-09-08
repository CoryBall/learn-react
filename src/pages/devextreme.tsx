import { ExtremeFileManager, ExtremeForm, ExtremeList } from '@/components/devextreme';
import React from 'react';


const DevExtremePage: React.FC = () => {
    return (
        <div className="m-auto space-y-2 text-center w-3/4 max-h-full pt-8 space-y-4">
            <h1>Grid</h1>
            <ExtremeList />
            <h1>File Manager</h1>
            <ExtremeFileManager/>
            <h1>Form</h1>
            <div className="w-1/2 mx-auto">
                <ExtremeForm />
            </div>
        </div>
    )
}

export default DevExtremePage;