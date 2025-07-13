import { Exception } from '@shared/domain/exceptions/exception';
import { HttpStatus } from '@nestjs/common';
import { SharedExceptionMessages } from '@shared/domain/exceptions/shared-exception-messages';

/**
 * EntityNotFoundException is thrown when an entity is not found in the system.
 * It extends the base Exception class and provides a specific error message.
 */
export class EntityNotFoundException extends Exception {
    /**
     * @param name - The name of the entity that was not found.
     * @param id - The ID of the entity that was not found.
     */
    constructor(name: string, id: string) {
        super(
            SharedExceptionMessages.ENTITY_NOT_FOUND.replace('{{name}}', name).replace('{{id}}', id),
            HttpStatus.NOT_FOUND,
        );
    }
}
