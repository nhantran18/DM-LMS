import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotebookService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.NotebookUncheckedCreateInput) {
    return await this.prismaService.notebook.create({
      data: data,
      include: {
        modelVariations: true,
        datasets: true,
      },
    });
  }

  async getMany(criteria) {
    return await this.prismaService.notebook.findMany({
      where: criteria,
      select: {
        id: true,
        title: true,
        labels: true,
        updatedAt: true,
        userId: true,
        isPublic: true,
        votes: true,
      },
      orderBy: {
        votes: 'desc',
      },
    });
  }

  async getOne(id: number) {
    return await this.prismaService.notebook.findFirst({
      where: { id: id },
      include: {
        modelVariations: {
          select: {
            modelVariationId: true,
          },
        },
        datasets: {
          select: {
            datasetId: true,
          },
        },
      },
    });
  }

  async updateOne(id: number, data: Prisma.NotebookUncheckedUpdateInput) {
    let updateData: any = { ...data };
    console.log(updateData);
    return await this.prismaService.notebook.update({
      where: { id: id },
      data: updateData,
    });
  }
}
