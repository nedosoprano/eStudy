import { EntityBase } from "./entity-base"
import { Module } from "./module"

export interface Course extends EntityBase {
    language: string
    modules: Module[]
}
