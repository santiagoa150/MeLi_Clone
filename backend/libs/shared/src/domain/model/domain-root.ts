/**
 * DomainRoot interface defines a contract for domain objects.
 */
export abstract class DomainRoot<T> {
    /**
     * Normalizes the domain object.
     */
    public abstract normalize(): T;
}
