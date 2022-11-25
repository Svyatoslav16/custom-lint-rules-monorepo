import { StyleRule } from '@vanilla-extract/css'
import { ClassNames } from '@vanilla-extract/css/dist/declarations/src/types'

declare module '@vanilla-extract/css' {
	interface ComplexStyleRuleExtension {
		'-webkit-line-clamp'?: string
		'-webkit-box-orient'?: string
	}

	export type ComplexStyleRule =
		| StyleRule
		| Array<StyleRule | ClassNames>
		| ComplexStyleRuleExtension
}
