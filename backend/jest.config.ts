// jest.config.ts
import type { CompilerOptions } from 'typescript';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const typedOptions = compilerOptions as unknown as CompilerOptions;

export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleNameMapper: pathsToModuleNameMapper(typedOptions?.paths ?? {}, {
        prefix: '<rootDir>/',
    }),
    testMatch: ['<rootDir>/tests/**/*.spec.ts'],
    coverageDirectory: './coverage',
    collectCoverageFrom: ['**/*.(t|j)s'],
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};
