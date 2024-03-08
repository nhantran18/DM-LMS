import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { TopicCreateREQ } from './request/topic-create.request';
import { TopicOntology } from 'src/services/ontology/ontology.service';
import { TopicUpdateREQ } from './request/topic-update.request';
import { TopicLinkDeleteREQ } from './request/topic-link-delete.request';
import { TopicDetailRESP } from './response/topic-detail.response';

@Injectable()
export class TopicService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly ontologyService: TopicOntology,
  ) {}

  async create(body: TopicCreateREQ) {
    await this.prismaService.topic.create({ data: TopicCreateREQ.toCreateInput(body) });
    // this.ontologyService.addTopic(body);
  }

  async detail(id: number) {
    const topic = await this.prismaService.topic.findUniqueOrThrow({
      where: { id },
      select: {
        title: true,
        EndLink: {
          include: { end: true },
        },
      },
    });

    return TopicDetailRESP.fromEntity(topic as any);
  }

  async update(id: number, body: TopicUpdateREQ) {
    await this.prismaService.topic.update({
      where: { id },
      data: TopicUpdateREQ.toUpdateInput(body),
    });

    if (body.postIds) await this.prismaService.topicLink.createMany({ data: TopicUpdateREQ.toCreateLink(id, body) });
  }

  async disactiveLink(id: number, body: TopicLinkDeleteREQ) {
    const link = await this.prismaService.topicLink.findMany({
      where: { startId: id, endId: { in: body.postIds } },
      select: { id: true },
    });

    link.map((link) =>
      this.prismaService.topicLink.update({
        where: { id: link.id },
        data: { state: false },
      }),
    );
  }
}