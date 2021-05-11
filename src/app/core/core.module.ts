import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StorageManagerService } from './services/storage-manager.service';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        StorageManagerService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                StorageManagerService
            ]
        };
    }
}