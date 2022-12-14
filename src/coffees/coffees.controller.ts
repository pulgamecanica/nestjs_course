import {
	Controller,
	Get,
	Param,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
	@Get()
	findAll(): string {
		return ("This will return all coffees");
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `This returns #${id} index`;
	}
}
