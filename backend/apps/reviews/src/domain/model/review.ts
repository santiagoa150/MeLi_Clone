import { DomainRoot } from '@shared/domain/model/domain-root';
import { ReviewNormalized } from '@shared/domain/model/review/review-normalized';
import { IdValueObject } from '@shared/domain/value-object/id.value-object';
import { NumberValueObject } from '@shared/domain/value-object/number.value-object';
import { DateValueObject } from '@shared/domain/value-object/date.value-object';
import { StringValueObject } from '@shared/domain/value-object/string.value-object';

/**
 * Review represents a review in the domain model.
 */
export class Review extends DomainRoot<ReviewNormalized> {
    /**
     * @param _id - The unique identifier of the review.
     * @param _productId - The unique identifier of the product being reviewed.
     * @param _userId - The unique identifier of the user who wrote the review.
     * @param _rating - The rating given in the review, typically a number between 1 and 5.
     * @param _createdAt - The date and time when the review was created.
     * @param _comment - The content of the review, which can be optional.
     */
    constructor(
        private readonly _id: IdValueObject,
        private readonly _productId: IdValueObject,
        private readonly _userId: IdValueObject,
        private readonly _rating: NumberValueObject,
        private readonly _createdAt: DateValueObject,
        private readonly _comment?: StringValueObject,
    ) {
        super();
    }

    get productId(): IdValueObject {
        return this._productId;
    }

    get createdAt(): DateValueObject {
        return this._createdAt;
    }

    /**
     * Creates a new Review instance.
     */
    public static create(
        id: string,
        productId: string,
        userId: string,
        rating: number,
        createdAt: Date,
        comment?: string,
    ): Review {
        return new Review(
            IdValueObject.create(id),
            IdValueObject.create(productId),
            IdValueObject.create(userId),
            NumberValueObject.create(rating),
            DateValueObject.create(createdAt),
            comment ? StringValueObject.create(comment) : undefined,
        );
    }

    /**
     * Normalizes the Review instance into a ReviewNormalized object.
     */
    public normalize(): ReviewNormalized {
        return {
            id: this._id.toString(),
            productId: this._productId.toString(),
            userId: this._userId.toString(),
            rating: this._rating.toNumber(),
            createdAt: this._createdAt.toIsoString(),
            comment: this._comment?.toString(),
        };
    }
}
