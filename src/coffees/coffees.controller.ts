import {
	Controller,
	Get,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
	@Get()
	findAll(): string {
		return ("This will return all coffees");
	}
}
