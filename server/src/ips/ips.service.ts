import { Injectable } from '@nestjs/common';
import { IpsEntity } from './entities/ips.entity';
import { CreateIpDto } from './dto/create-ip.dto';
import { UpdateIpDto } from './dto/update-ip.dto';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IpsService {
  constructor(
    @InjectRepository(IpsEntity)
    private ipsRepository: Repository<IpsEntity>,
  ) {}

  async getNoti() {
    return this.ipsRepository.find({
      where: {
        event_type: 'drop',
      },
      take: 50,
    });
  }

  async getProtocolCount() {
    let tcpCount = await this.ipsRepository.count({ where: { proto: 'TCP' } });
    let udpCount = await this.ipsRepository.count({ where: { proto: 'UDP' } });

    return {
      tcp: tcpCount,
      udp: udpCount,
    };
  }

  async getEventType() {
    let dropCount = await this.ipsRepository.count({
      where: { event_type: 'drop' },
    });
    let flowCount = await this.ipsRepository.count({
      where: { event_type: 'flow' },
    });
    let alertCount = await this.ipsRepository.count({
      where: { event_type: 'alert' },
    });
    let statsCount = await this.ipsRepository.count({
      where: { event_type: 'stats' },
    });
    let sshCount = await this.ipsRepository.count({
      where: { event_type: 'ssh' },
    });
    let dnsCount = await this.ipsRepository.count({
      where: { event_type: 'dns' },
    });
    let httpCount = await this.ipsRepository.count({
      where: { event_type: 'http' },
    });
    let rdpCount = await this.ipsRepository.count({
      where: { event_type: 'rdp' },
    });

    return {
      drop: dropCount,
      flow: flowCount,
      alert: alertCount,
      stats: statsCount,
      ssh: sshCount,
      dns: dnsCount,
      http: httpCount,
      rdp: rdpCount,
    };
  }

  async getIpAndPort() {
    return await this.ipsRepository.find();
  }

  async getAttack() {
    let synScanCount = this.ipsRepository.count({
      where: { signature: 'SYN Scanning Detection' },
    });
    let synFloodCount = this.ipsRepository.count({
      where: { signature: 'SYN Flooding' },
    });
    let finScanCount = this.ipsRepository.count({
      where: { signature: 'FIN Scanning' },
    });
    let xmasScanCount = this.ipsRepository.count({
      where: { signature: 'X-MAS Scanning' },
    });
    let nullScanCount = this.ipsRepository.count({
      where: { signature: 'NULL Scanning' },
    });

    return {
      synScan: synScanCount,
      synFlood: synFloodCount,
      finScan: finScanCount,
      xmasScan: xmasScanCount,
      nullScan: nullScanCount,
    };
  }
}
