import { Injectable, Inject } from '@angular/core';
import {
    NotificationService,
    NotificationSettings
} from '@progress/kendo-angular-notification';

@Injectable()
export class NotificationGlobalService {
    private hideNotificationTime: number;

    constructor(
        private notificationService: NotificationService,
        @Inject('env') private env
    ) {
        // if (env.notification && env.notification.hideNotificationTime) {
        //     this.hideNotificationTime = env.notification.hideNotificationTime;
        // }
    }

    /** Show a success message with Kendo UI - NotificationService */
    showNotification(
        type: 'success' | 'error' | 'warning' | 'info',
        message: string,
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        const notificationSettings = <NotificationSettings>{
            content: message,
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 600 },
            position: {
                horizontal: horizontalPosition,
                vertical: verticalPosition
            },
            type: { style: type, icon: true },
            hideAfter: 2000
        };

        if (durationTime || this.hideNotificationTime) {
            notificationSettings.hideAfter =
                durationTime || this.hideNotificationTime;
        } else {
            notificationSettings.closable = true;
        }

        this.notificationService.show(notificationSettings);
    }
    showSuccess(
        message: string,
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        this.showNotification(
            'success',
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showError(
        message: string,
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        this.showNotification(
            'error',
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showWarning(
        message: string,
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        this.showNotification(
            'warning',
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showInfo(
        message: string,
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        this.showNotification(
            'info',
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showErrorPermission(
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        //TODO: Usar módulo de translate para traer el mensaje de error
        const message =
            'No tienes suficientes permisos para realizar esta operación';
        this.showError(
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showErrorUndefined(
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        //TODO: Usar módulo de translate para traer el mensaje de error
        const message = 'Se ha producido un error inesperado en el sistema.';
        this.showError(
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showErrorNotFound(
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        //TODO: Usar módulo de translate para traer el mensaje de error
        const message = 'Recurso solicitado no encontrado.';
        this.showError(
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }

    showErrorTimeout(
        durationTime?: number,
        horizontalPosition: 'left' | 'center' | 'right' = 'right',
        verticalPosition: 'top' | 'bottom' = 'top'
    ): void {
        //TODO: Usar módulo de translate para traer el mensaje de error
        const message =
            'Tenemos problemas de conexión con el sistema, intentelo de nuevo pasado unos minutos';
        this.showError(
            message,
            durationTime,
            horizontalPosition,
            verticalPosition
        );
    }
}
