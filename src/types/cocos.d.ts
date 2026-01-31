/**
 * Type declarations for Cocos Creator 3.x
 * These types help TypeScript understand the Cocos Creator global objects
 */

declare global {
    /**
     * Cocos Creator 3.x global namespace
     */
    const cc: CocosCreatorGlobal | undefined;

    interface CocosCreatorGlobal {
        sys?: CocosCreatorSys;
    }

    interface CocosCreatorSys {
        platform?: number;
        localStorage?: Storage;
    }
}

export { };
